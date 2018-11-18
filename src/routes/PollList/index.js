import React from 'react';
import { connect } from 'react-redux';
import styles from './index.module.css';
import { POLLS } from '../../constants/REDUCER_TYPES';
import PollItem from './components/PollItem';
import REDUCER_TYPE_CHECKS from '../../constants/REDUCER_TYPE_CHECKS';

function PollListsDetail(props) {
  const { polls } = props;

  return (
    <section className={styles.container}>
      {
        Object.keys(polls).map((pollKey, index) => (
          <PollItem
            className={index === 0 ? styles.pollFirst : styles.poll}
            poll={polls[pollKey]}
          />
        ))
      }
    </section>
  );
}

PollListsDetail.propTypes = {
  polls: REDUCER_TYPE_CHECKS[POLLS].polls.isRequired,
};

const mapStateToProps = state => ({
  polls: state[POLLS].polls,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PollListsDetail);
