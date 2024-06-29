import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem } from '@angular/material/list';
import { MatTooltip } from '@angular/material/tooltip';
import { AppStore, Theme } from '@app/services/state';
import { deepEquals } from '@app/utils/assert';

type ThemeOption = { theme: Theme; label: string; icon: string };

@Component({
  selector: 'button-theme-switcher',
  templateUrl: './button-theme-switcher.component.html',
  styleUrl: './button-theme-switcher.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTooltip, MatIcon, MatListItem],
  animations: [
    trigger('switchItem', [
      transition(':enter', [style({ opacity: 1, top: '100%' }), animate('200ms', style({ opacity: 1, top: '0' }))]),
      transition(':leave', [style({ opacity: 1, top: '0' }), animate('200ms', style({ opacity: 1, top: '-100%' }))]),
    ]),
  ],
})
export class ButtonThemeSwitcherComponent {
  public store = inject(AppStore);
  public options: ThemeOption[] = [
    { theme: { selectedMode: 'manual', currentVariant: 'light' }, label: 'Switch to light mode', icon: 'light_mode' },
    { theme: { selectedMode: 'manual', currentVariant: 'dark' }, label: 'Switch to dark mode', icon: 'dark_mode' },
    {
      theme: { selectedMode: 'auto', currentVariant: 'light' },
      label: 'Switch to auto mode',
      icon: 'brightness_medium',
    },
  ];
  public nextOptionIndex = computed((): number => {
    const theme = this.store.theme();
    const currentIndex = this.options.findIndex((option) => deepEquals(option.theme, theme));
    const nextIndex = (currentIndex + 1) % this.options.length;
    return nextIndex;
  });
}
