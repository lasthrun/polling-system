import getColor from './getColor';

/**
 * @description map chart structure data
 * @return {array}
 * */
export default function (options) {
  return options.map(option => ({
    id: option.id,
    label: option.label,
    votes: option.votes,
    color: getColor(),
  }));
}
