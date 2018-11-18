import produce from 'immer';
import { combineReducers } from 'redux';
import ACTION_TYPES from '../constants/ACTION_TYPES';
import { POLLS } from '../constants/REDUCER_TYPES';
// =============================================================================
// initial states
// =============================================================================
export const pollsInitialState = {};
// =============================================================================
// reducers
// =============================================================================
export default combineReducers({
  polls: (
    state = pollsInitialState,
    { type, polls },
  ) => produce(state, (draft) => {
    switch (type) {
      case ACTION_TYPES[POLLS].updatePolls:
        polls.forEach((poll) => {
          const { id } = poll;
          draft[id] = poll;
        });
        return draft;
      default: return draft;
    }
  }),
});
