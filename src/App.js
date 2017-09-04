import React, {Component} from 'react';

import './App.css';
import TopNav from './components/TopNav/TopNav';
import Table from './components/Table/Table';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TopNav/>
        <Table/>
      </div>
    )
  }
}

export default App;
