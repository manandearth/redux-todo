import * as actions from '../src/redux/actions';
import * as types from '../src/redux/actionTypes';
import reducer from '../src/redux/reducers/todos';

// testing actions

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


// testing reducers
const initialState = {
	lists: {1: "Todo"},
  allIds: [],
  byIds: {}
}; 


describe('todos reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(
			initialState
		);
	});
	it('renames the list ', () => {
		expect(reducer(initialState, {
			type: types.RENAME_LIST,
			payload: {id: 1, title: "spanking new name"}
		})).toEqual(
			{
				lists: {1: "spanking new name"},
					allIds: [],
					byIds: {}
			}
		
		);
	});
	//TODO the state seem to follow from one to the next even though I use `initialState again and it is a const
	it('adds a list', () => {
		expect(reducer(initialState, {
			type: types.ADD_LIST,
			payload: {
				listId: 2,
				list: 'another one bites the dust'}})).toEqual(
					{
						lists: {
							1: "spanking new name",
							2: "another one bites the dust"
						},
						allIds: [],
						byIds: {}
					});
	});
});
