import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
  selector: 'empty-state',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EmptyStateComponent {}
