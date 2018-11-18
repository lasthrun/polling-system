import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import styles from './index.module.css';
import { POLLS } from '../../constants/REDUCER_TYPES';
import PollItem from './components/PollItem';
import PollItemFirst from './components/PollItemFirst';
import REDUCER_TYPE_CHECKS from '../../constants/REDUCER_TYPE_CHECKS';

function PollListsDetail(props) {
  const { polls } = props;

  return (
    <section className={styles.container}>
      {
        Object.keys(polls).map((pollKey, index) => (
          index === 0
            ? (
              <PollItemFirst
                key={pollKey}
                className={index === 0 ? styles.pollFirst : styles.poll}
                poll={polls[pollKey]}
              />
            )
            : (
              <Link
                key={pollKey}
                className={index === 0 ? styles.pollFirst : styles.poll}
                to={`poll/${pollKey}`}
              >
                <PollItem poll={polls[pollKey]} />
              </Link>
            )
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
