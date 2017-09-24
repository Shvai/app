import React, {Component} from 'react';
import {Provider} from 'react-redux';

import configureStore from '../store/configureStore';
import SearchableUserList from './SearchableUserList';
import './App.css';

const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SearchableUserList />
        </div>
      </Provider>
    );
  }
}

export default App;
