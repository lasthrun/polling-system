import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './index.module.css';
import { POLLS } from '../../constants/REDUCER_TYPES';
import REDUCER_TYPE_CHECKS from '../../constants/REDUCER_TYPE_CHECKS';

function PollDetail(props) {
  const { polls, pollId } = props;
  const poll = polls[pollId];

  return (
    <section className={styles.container} />
  );
}

PollDetail.propTypes = {
  polls: REDUCER_TYPE_CHECKS[POLLS].polls.isRequired,
  pollId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  polls: state[POLLS].polls,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PollDetail);
