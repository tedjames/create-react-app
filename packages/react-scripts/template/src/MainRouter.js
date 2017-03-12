import React, { Component } from 'react';
import { Provider } from 'react-redux'
import App from './components/app'

class MainRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default MainRouter;
