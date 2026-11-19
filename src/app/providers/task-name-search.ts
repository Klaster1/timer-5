import { DestroyRef, inject, Service } from '@angular/core';
import { Task, TaskId } from '@app/domain/task';
import type { FuseWorker } from 'fuse.js/worker';

// About one typo per three letters: "stndup" finds "Standup", but "red" does not find "Write report".
const NAME_FUZZINESS = 0.3;
// The Fuse docs name four workers as the sweet spot: more adds memory, not speed.
const WORKERS = 4;

/**
 * The typo-tolerant search over task names, in Fuse's own `FuseWorker`: the workers hold the names, build the
 * index and search it, so none of that runs on the main thread. Fuse and the workers load the first time a
 * search needs them. The worker script is copied to `assets` by angular.json, as the Fuse docs describe.
 */
@Service()
export class TaskNameSearch {
  private worker?: FuseWorker<string>;
  private ids: TaskId[] = [];
  private synced?: Task[];
  private queue: Promise<unknown> = Promise.resolve();

  constructor() {
    inject(DestroyRef).onDestroy(() => this.worker?.terminate());
  }

  /** Gives the workers the names of the tasks, so the first search of a search box does not wait for them. */
  prepare(tasks: Task[]): Promise<void> {
    return this.enqueue(async () => void (await this.sync(tasks)));
  }

  /** The ids of the tasks whose name matches the search. Fuse's extended search syntax applies: `'exact`, `^start`, `end$`, `!not`, `a | b`. */
  search(text: string, tasks: Task[]): Promise<Set<TaskId>> {
    return this.enqueue(async () => {
      const worker = await this.sync(tasks);
      const results = await worker.search(text);
      return new Set(results.map(({ refIndex }) => this.ids[refIndex]!));
    });
  }

  // The workers take one request at a time: the names a search runs against must be the ones `ids` maps back.
  private enqueue<T>(job: () => Promise<T>): Promise<T> {
    const run = this.queue.then(job, job);
    this.queue = run.catch(() => undefined);
    return run;
  }

  private async sync(tasks: Task[]): Promise<FuseWorker<string>> {
    if (this.worker && this.synced === tasks) return this.worker;
    const names = tasks.map((task) => task.name);
    if (this.worker) {
      await this.worker.setCollection(names);
    } else {
      const { FuseWorker } = await import('fuse.js/worker');
      this.worker = new FuseWorker(
        names,
        // Extended search: the words are ANDed and each allows a typo. An operator makes a word exact: a quote before
        // it (include), "^" before it (starts with), "$" after it (ends with), "!" before it (excludes), "|" between words (either).
        // Only who matches counts, so no sort.
        { useExtendedSearch: true, threshold: NAME_FUZZINESS, ignoreLocation: true, shouldSort: false },
        { numWorkers: WORKERS, workerUrl: new URL('assets/fuse.worker.mjs', document.baseURI) },
      );
    }
    this.ids = tasks.map((task) => task.id);
    this.synced = tasks;
    return this.worker;
  }
}
