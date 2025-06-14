import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './empty-state.html',
  styleUrls: ['./empty-state.scss'],
  selector: 'empty-state',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {}
