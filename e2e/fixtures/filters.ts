import { screenTask } from '../page-objects/screen-task';
import { screenTasks } from '../page-objects/screen-tasks';
import { getLocationSearch, reload, urlTo } from '../utils';

fixture('Filters');

test('Name', async (t) => {
  // Have some tasks with uppercase names
  await t.navigateTo(urlTo('/'));
  await screenTasks.addTask('GAME');
  await screenTasks.addTask('FOO');
  await screenTasks.addTask('BAR');
  await screenTasks.addTask('BAZ');
  // Send "ctrl+f" keys
  await t.pressKey('ctrl+f');
  // Fill in the "Name filter", in lowercase
  await t.typeText(screenTasks.filter.name.input, 'game');
  // Assert current task is still opened
  await t.expect(screenTask.name.textContent).eql('BAZ');
  // Assert the displayed tasks match the filter
  await t.expect(screenTasks.taskItem.count).eql(1);
  await t.expect(screenTasks.taskName.nth(0).textContent).eql('GAME');
  // Assert the URL ends with "?search=${value}"
  await t.expect(getLocationSearch()).eql('?search=game');
  // Reload the page, assert the filter is still open and applied
  await reload();
  await t.expect(screenTasks.taskItem.count).eql(1);
  await t.expect(screenTasks.taskName.nth(0).textContent).eql('GAME');
  // Clear the filter value with "Clear" button in the form control
  await t.click(screenTasks.filter.name.buttonClear);
  // Assert all tasks are displayed
  await t.expect(screenTasks.taskItem.count).eql(4);
  await t.expect(getLocationSearch()).eql('');
});
