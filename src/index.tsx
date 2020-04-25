import React from 'react';
import ReactDOM from 'react-dom';
import '../src/client/assets/styles/index.css';
import '../src/client/assets/styles/App.css';
import * as serviceWorker from './serviceWorker';
import App from './client/components/base/App';
import { Provider } from 'react-redux';
import store from '../src/client/createStore';

// Render the app
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('pwareactts')
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./client/components/base/App', render);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
