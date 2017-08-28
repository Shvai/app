import React, {Component} from 'react';
import './App.css';

import TopNav from './components/TopNav/TopNav';
import Table from './components/Table/Table';

class App extends Component {
<<<<<<< HEAD
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <table className="myTable">
          <tr className="header">
            <th style={{ width: '20%' }}>Firstname</th>
            <th style={{ width: '20%' }}>Lastname</th>
            <th style={{ width: '25%' }}>Email</th>
            <th style={{ width: '35%' }}></th>
          </tr>
          {this.state.users.map(User =>
            <tr key={User.id}>
              <td>{User.firstname}</td>
              <td>{User.lastname}</td>
              <td>{User.email}</td>
              <td>
                <button>Edit</button>
                <button onClick={}>Delete</button>
              </td>
            </tr>)}
        </table>
      </div>
    );
  }
=======
    render() {
        return (
            <div className="App">
                <TopNav/>
                <Table/>
            </div>
        );
    }
>>>>>>> 78951b3a88b860b26693a03e2d43e01140687b40
}

export default App;
