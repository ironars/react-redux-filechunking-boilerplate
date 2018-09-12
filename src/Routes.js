import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import Loadable from 'react-loadable';
import Loading from 'components/Loading.js';

const App = Loadable({
  loader: () => import('containers/App.js'),
  loading: Loading,
});

const Main = Loadable({
  loader: () => import('components/Main.js'),
  loading: Loading,
});

export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path='/' component={Main} />
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>
  );
}