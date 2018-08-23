import usersReducer from 'reducers/usersReducer';
import { CHANGE_USER_STATE, HIRED_STATE, INTERVIEWING_STATE } from 'actions/types';

it('handles actions of type CHANGE_USER_STATE', () => {
  const action = {
    type: CHANGE_USER_STATE,
    payload: { id: { value: 1 }, state: HIRED_STATE }
  };

  const prevState = { userList: [{ id: { value: 1 }, state: INTERVIEWING_STATE }], conexionError: false };
  const newState = usersReducer(prevState, action);

  expect(newState).toEqual({ userList: [{ id: { value: 1 }, state: HIRED_STATE }], conexionError: false });
});
