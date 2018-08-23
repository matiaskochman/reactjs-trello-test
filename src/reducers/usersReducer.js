import {
    FETCH_USERS,
    CHANGE_USER_STATE,
    APPLIED_STATE,
    INTERVIEWING_STATE,
    HIRED_STATE
} from 'actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case CHANGE_USER_STATE:
            return [...state, action.payload];
        case FETCH_USERS:
            const comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments];
        default: 
            return state;
    }
}