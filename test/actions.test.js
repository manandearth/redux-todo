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
});

test('the best flavour is grapefruit', () => {
	expect(2 + 3).toBe(5);
});





// const Todo = require('../../src/components/Todo');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
