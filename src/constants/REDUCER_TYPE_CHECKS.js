import PropTypes from 'prop-types';
import {POLLS} from './REDUCER_TYPES';
// =============================================================================
// basic unit
// =============================================================================
const poll = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
    publishedDate: PropTypes.number.isRequired,
    answer: PropTypes.shape({
    type:  PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired
  }).isRequired,
}).isRequired;
// =============================================================================
// type checks
// =============================================================================
export default {
  [POLLS]: {
    polls: {
      isRequired: PropTypes.objectOf(poll).isRequired,
    },
    poll: {
      isRequired: poll,
    },
  },
};
