import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import stores from './reducers';
import pollsData from './assets/poll';
import './theme.css';
import PollList from './routes/PollList';
import Poll from './routes/Poll';
import ACTION_TYPES from './constants/ACTION_TYPES';
import { POLLS } from './constants/REDUCER_TYPES';

export default function App() {
  /**
   * @description init polls data
   * */
  useEffect(() => {
    stores.dispatch({
      type: ACTION_TYPES[POLLS].updatePolls,
      polls: pollsData.polls,
    });
  }, []);

  return (
    <Provider store={stores}>
      <Router>
        <PollList path="/" />
        <Poll path="poll/:pollId" />
      </Router>
    </Provider>
  );
}
