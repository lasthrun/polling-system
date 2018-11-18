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
    {
      type, polls, id, optionId,
    },
  ) => produce(state, (draft) => {
    switch (type) {
      case ACTION_TYPES[POLLS].updatePolls:
        polls.forEach((poll) => {
          draft[poll.id] = poll;
          draft[poll.id].answer.options = draft[poll.id].answer.options.map((option) => {
            const votesStore = JSON.parse(localStorage.getItem(poll.id));

            return {
              ...option,
              // get the votes
              votes: votesStore ? votesStore[option.id] : 0,
            };
          });
        });
        return draft;
      case ACTION_TYPES[POLLS].vote: {
        const optionIndex = draft[id].answer.options.findIndex(option => option.id === optionId);
        draft[id].answer.options[optionIndex].votes += 1;

        // get and update the votes store
        let votesStore = JSON.parse(localStorage.getItem(id));
        if (votesStore) {
          votesStore[optionId] = draft[id].answer.options[optionIndex].votes;
        } else {
          votesStore = { [optionIndex]: draft[id].answer.options[optionIndex].votes };
        }
        localStorage.setItem(id, JSON.stringify(votesStore));

        return draft;
      }
      default:
        return draft;
    }
  }),
});
