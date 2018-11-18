import ACTION_TYPES from '../constants/ACTION_TYPES';
import { POLLS } from '../constants/REDUCER_TYPES';
/**
 * @description vote poll
 * @param {number} id - pollId
 * @param {number} optionId - vote option id
 * */
export const vote = ({ id, optionId }) => ({
  type: ACTION_TYPES[POLLS].vote,
  id,
  optionId,
});
