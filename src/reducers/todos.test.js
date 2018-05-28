import { todos } from './todos';
import { ADD_TODO } from '../actions/types';

describe( 'todo reducer', () => {
  it('should add a todo', () => {
    const stateBefore = [];
    const action = {
      type: ADD_TODO,
      id: 0,
      text: 'A testing todo'
    };
    const stateAfter = [
      {
        id: 0,
        text: "A testing todo",
        completed: false
      }
    ];
    expect(
      todos(stateBefore, action)
      ).toEqual(stateAfter);
  });
});


