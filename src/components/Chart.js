import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Doughnut } from 'react-chartjs-2';
import styles from './Chart.module.css';

/**
 * @description chart component
 * @param {string} [props.className=''] - custom class name
 * */
export default function Chart(props) {
  const {
    className, pollData,
  } = props;

  return (
    <div className={classNames(styles.container, className)}>
      <Doughnut
        data={{
          labels: pollData.map(poll => poll.label),
          datasets: [
            {
              label: '# of Votes',
              data: pollData.map(poll => poll.votes),
              backgroundColor: pollData.map(poll => poll.color),
            }],
        }}
        options={{
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
}

Chart.propTypes = {
  className: PropTypes.string,
  pollData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Chart.defaultProps = {
  className: '',
};
