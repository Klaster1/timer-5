import { Selector } from 'testcafe';

export const dateTimePicker = {
  buttonHoursIncrement: Selector('ngx-mat-datetime-content ngx-mat-timepicker button').nth(0),
  buttonHoursDecrement: Selector('ngx-mat-datetime-content ngx-mat-timepicker button').nth(3),
  buttonSubmit: Selector('ngx-mat-datetime-content button').withText('done'),
};
