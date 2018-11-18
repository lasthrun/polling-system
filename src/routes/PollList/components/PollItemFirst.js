import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from '@reach/router';
import connect from 'react-redux/es/connect/connect';
import styles from './PollItemFirst.module.css';
import { POLLS } from '../../../constants/REDUCER_TYPES';
import REDUCER_TYPE_CHECKS from '../../../constants/REDUCER_TYPE_CHECKS';
import i18n from '../../../i18n';
import Button from '../../../components/Button';
import Chart from '../../../components/Chart';
import chartDataGetter from '../../../utilities/chartDataGetter';
import { vote as voteAction } from '../../../actions';

function PollItem(props) {
  const { poll, className, vote } = props;
  const chartData = chartDataGetter(poll.answer.options);
  let totalVotes = 0;
  poll.answer.options.forEach((option) => {
    totalVotes += option.votes;
  });

  return (
    <section className={classNames(className, styles.container)}>
      <h3 className={styles.todaysPoll}>{i18n({ path: 'polls.todaysPoll' })}</h3>
      <div className={styles.title}>
        <Link to={`poll/${poll.id}`}>
          <span>
            {poll.title}
            <span className={styles.date}>{moment.unix(poll.publishedDate).format('DD MMM YYYY')}</span>
          </span>
        </Link>
      </div>
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
      <span className={styles.votesRecords}>
        {`${i18n({ path: 'polls.recordsHint' })}: ${totalVotes}`}
      </span>
      <Chart className={styles.chart} pollData={chartData} />
    </section>
  );
}

PollItem.propTypes = {
  className: PropTypes.string,
  poll: REDUCER_TYPE_CHECKS[POLLS].poll.isRequired,
  vote: PropTypes.func.isRequired,
};

PollItem.defaultProps = {
  className: '',
};

const mapStateToProps = () => ({});

const mapDispatchToProps = { vote: voteAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PollItem);
