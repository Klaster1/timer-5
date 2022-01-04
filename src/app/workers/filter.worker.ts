/// <reference lib="webworker" />

import { filter } from '@app/domain/filter';
import * as Comlink from 'comlink';

Comlink.expose(filter);
