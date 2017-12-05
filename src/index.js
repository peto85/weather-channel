import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// store creation and middleware
import store from './store';

// the main app component
import AppContainer from './Components/App/AppContainer.js';

const Root = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
