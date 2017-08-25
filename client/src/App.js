import React, {Component} from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';

class App extends Component {
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
            <th style={{ width: '33.333333%' }}>Firstname</th>
            <th style={{ width: '33.333333%' }}>Lastname</th>
            <th style={{ width: '33.333333%' }}>Email</th>
          </tr>
          {this.state.users.map(User =>
            <tr key={User.id}>
              <td>{User.firstname}</td>
              <td>{User.lastname}</td>
              <td>{User.email}</td>
            </tr>)}
        </table>
      </div>
    );
  }
}

export default App;
