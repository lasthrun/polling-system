import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './PollItem.module.css';
import { POLLS } from '../../../constants/REDUCER_TYPES';
import REDUCER_TYPE_CHECKS from '../../../constants/REDUCER_TYPE_CHECKS';
import chartDataGetter from '../../../utilities/chartDataGetter';
import Chart from '../../../components/Chart';

export default function PollItem(props) {
  const { poll, className } = props;
  const chartData = chartDataGetter(poll.answer.options);

  return (
    <section className={classNames(className, styles.container)}>
      <Chart className={styles.chart} pollData={chartData} />
      <span className={styles.date}>{moment.unix(poll.publishedDate).format('DD MMM YYYY')}</span>
      <span className={styles.title}>{poll.title}</span>
    </section>
  );
}

PollItem.propTypes = {
  className: PropTypes.string,
  poll: REDUCER_TYPE_CHECKS[POLLS].poll.isRequired,
};

PollItem.defaultProps = {
  className: '',
};
