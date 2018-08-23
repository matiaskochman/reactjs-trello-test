import { fetchUsers, changeUserState } from 'actions';
import { FETCH_USERS_SAGA, HIRED_STATE, INTERVIEWING_STATE } from 'actions/types';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = fetchUsers();

    expect(action.type).toEqual(FETCH_USERS_SAGA);
  });

  it('has the correct payload', () => {
    const action = changeUserState({ user: 1, state: INTERVIEWING_STATE }, HIRED_STATE);

    expect(action.payload).toEqual({ user: 1, state: HIRED_STATE });
  });
});
