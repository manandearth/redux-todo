import * as actions from '../src/redux/actions.js';
import * as types from '../src/redux/actionTypes.js';


describe('actions', () => {
  it('should create an action to add a todo', () => {
      const text = 'Finish docs';
    const expectedAction = {
      type: types.ADD_TODO,
		payload: {
			content: undefined,
			id: 1,
			list: text
			
		}};
      expect(actions.addTodo(text)).toEqual(expectedAction);
  });
	it('should create an action to create a todolist', () => {
		const title = 'new list';
		const expectedAction = {
			type: types.ADD_LIST,
			payload: {
				listId: 2,
				list: title
			}};
		expect(actions.addList(title)).toEqual(expectedAction);
	});

	it('should set list filter to `completed`', () => {
		const filter = 'completed';
		const list = 1;
		const expectedAction = {
			type: types.SET_FILTER,
			payload: {
				list: list,
				filter: filter}
		};
		expect(actions.setFilter(list, filter)).toEqual(expectedAction);
	});
		



});

test('the best flavour is grapefruit', () => {
	expect(2 + 3).toBe(5);
});
