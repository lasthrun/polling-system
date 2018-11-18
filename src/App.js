import React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import stores from './reducers';
import './theme.css';
import PollList from './routes/PollList';
import Poll from './routes/Poll';

export default function App() {
  return (
    <Provider store={stores}>
      <Router>
        <PollList path="/" />
        <Poll path="poll/:pollId" />
      </Router>
    </Provider>
  );
}
