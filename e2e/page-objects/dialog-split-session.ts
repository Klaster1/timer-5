import { Selector, t } from 'testcafe';
import { e2e } from '../utils';

const sliderInput = Selector('.mdc-slider__track');
export const dialogSplitSession = {
  sessionStart: e2e('dialog-split-session__session-start'),
  sessionEnd: e2e('dialog-split-session__session-end'),
  sessionDuration: e2e('dialog-split-session__session-duration'),
  sliderInput,
  sliderTrack: Selector('.mdc-slider__track'),
  sliderThumb: Selector('mat-slider-visual-thumb'),
  buttonSubmit: e2e('dialog-split-session__button-submit'),
  async setSliderValue(ratio: number) {
    const trackWidth = await sliderInput.getBoundingClientRectProperty('width');
    const moveTo = Math.floor(trackWidth * ratio);
    await t.click(Selector('mat-slider'), { offsetX: moveTo });
  },
};
