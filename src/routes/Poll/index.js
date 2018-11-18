import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import classNames from 'classnames';
import styles from './index.module.css';
import { POLLS } from '../../constants/REDUCER_TYPES';
import REDUCER_TYPE_CHECKS from '../../constants/REDUCER_TYPE_CHECKS';
import Button from '../../components/Button';
import i18n from '../../i18n';
import chartDataGetter from '../../utilities/chartDataGetter';
import Chart from '../../components/Chart';
import { vote as voteAction } from '../../actions';

function PollDetail(props) {
  const { polls, pollId, vote } = props;
  const poll = polls[pollId];
  const chartData = chartDataGetter(poll.answer.options);
  let totalVotes = 0;
  poll.answer.options.forEach((option) => {
    totalVotes += option.votes;
  });

  return (
    <section className={styles.container}>
      <span className={styles.title}>
        {poll.title}
      </span>
      <span className={styles.date}>
        {`${i18n({ path: 'poll.published' })}: ${moment.unix(poll.publishedDate)
          .format('dddd, D MMMM YYYY, h:mma')}`}
      </span>
      <div className={styles.options}>
        {chartData.map((option, index) => (
          <Button
            key={option.id}
            className={classNames(styles.option, { [styles.first]: index === 0 })}
            style={{ backgroundColor: option.color }}
            label={option.label}
            onClick={() => { vote({ id: poll.id, optionId: option.id }); }}
          />
        ))}
      </div>
      <Chart className={styles.chart} pollData={chartData} />
      <span className={styles.votesRecords}>
        {`${i18n({ path: 'polls.recordsHint' })}: ${totalVotes}`}
      </span>
    </section>
  );
}

PollDetail.propTypes = {
  polls: REDUCER_TYPE_CHECKS[POLLS].polls.isRequired,
  pollId: PropTypes.string.isRequired,
  vote: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  polls: state[POLLS].polls,
});

const mapDispatchToProps = { vote: voteAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PollDetail);
