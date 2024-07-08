import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';
import { AppStore, Theme } from '@app/providers/state';
import { deepEquals } from '@app/utils/assert';

type ThemeOption = { theme: Theme; label: string; icon: string };

@Component({
  selector: 'button-theme-switcher',
  templateUrl: './button-theme-switcher.component.html',
  styleUrl: './button-theme-switcher.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTooltip, MatIcon, MatListItem, MatMenuModule],
})
export class ButtonThemeSwitcherComponent {
  public store = inject(AppStore);
  public options: ThemeOption[] = [
    { theme: { selectedMode: 'manual', currentVariant: 'light' }, label: 'Light', icon: 'light_mode' },
    { theme: { selectedMode: 'manual', currentVariant: 'dark' }, label: 'Dark', icon: 'dark_mode' },
    {
      theme: { selectedMode: 'auto', currentVariant: 'light' },
      label: 'System',
      icon: 'brightness_medium',
    },
  ];
  public currentOption = computed(() => {
    const theme = this.store.theme();
    return this.options.find((option) =>
      theme?.selectedMode === 'manual' ? deepEquals(option.theme, theme) : option.theme.selectedMode === 'auto',
    );
  });
  public currentThemeTooltip = computed(() => `Current theme: ${this.currentOption()?.label.toLowerCase()}`);
}
