import { screenTask } from '../page-objects/screen-task';
import { screenTasks } from '../page-objects/screen-tasks';
import { getLocationSearch, reload } from '../utils';
import { VISUAL_REGRESSION_OK, comparePageScreenshot } from '../visual-regression';

fixture('Filters');

test('Name', async (t) => {
  // Have some tasks with uppercase names
  await screenTasks.addTask('GAME');
  await screenTasks.addTask('FOO');
  await screenTasks.addTask('BAR');
  await screenTasks.addTask('BAZ');
  // Send "ctrl+f" keys
  await t.pressKey('ctrl+f');
  await t.wait(500);
  await t.expect(await comparePageScreenshot('empty filter')).eql(VISUAL_REGRESSION_OK);
  // Fill in the "Name filter", in lowercase
  await t.typeText(screenTasks.filter.name.input, 'game');
  // Assert current task is still opened
  await t.expect(screenTask.name.textContent).eql('BAZ');
  // Assert the displayed tasks match the filter
  await t.expect(screenTasks.taskItem.count).eql(1);
  await t.expect(screenTasks.taskName.nth(0).textContent).eql('GAME');
  await t.expect(await comparePageScreenshot('name filled')).eql(VISUAL_REGRESSION_OK);
  // Assert the URL ends with "?search=${value}"
  await t.expect(getLocationSearch()).eql('?search=game');
  // Reload the page, assert the filter is still open and applied
  await reload();
  await t.expect(screenTasks.taskItem.count).eql(1);
  await t.expect(screenTasks.taskName.nth(0).textContent).eql('GAME');
  // Clear the filter value with "Clear" button in the form control
  await t.click(screenTasks.filter.name.buttonClear);
  await t.expect(await comparePageScreenshot('cleared')).eql(VISUAL_REGRESSION_OK);
  // Assert all tasks are displayed
  await t.expect(screenTasks.taskItem.count).eql(4);
  await t.expect(getLocationSearch()).eql('');
});
