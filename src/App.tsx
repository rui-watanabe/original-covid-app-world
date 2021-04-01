import React from 'react';
import { Router, Route } from 'react-router-dom';
import * as H from 'history';
import DashBoard from './features/covid/DashBoard/DashBoard';
import { createGenerateClassName, StylesProvider } from '@material-ui/styles';

const defaultHistory = H.createBrowserHistory();
const generateClassName = createGenerateClassName({
  productionPrefix: 'wo',
});

const App: ({ history }: { history?: H.History }) => JSX.Element = ({
  history = defaultHistory,
}) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Route exact path="/" component={DashBoard} />
      </Router>
    </StylesProvider>
  );
};

export default App;