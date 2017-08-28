import React, {Component} from 'react';
import './Table.css';

class Table extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }
/*
  let switching = true;
  let i;
  let shouldswitch;
  while (switching) {
    for (i = 0; i < (this.state.users.length - 1); i++) {
      shouldswitch = false;
      if (this.state.users[i].firstname > this.state.users[i+1].firstname) {
        shouldswitch = true;
        break;
      }
    }
    if (shouldswitch) {
      let foo = this.state.users[i];
      this.state.users[i] = this.state.users[i+1];
      this.state.users[i+1] = foo;
      switching = true;
    }
*/
  render() {
    return (
      <div className="Table">
        <div>
          <h1>User List</h1>
          <table className="myTable">
            <tr className="header">
              <th style={{width: '33.333333%'}}>Firstname</th>
              <th style={{width: '33.333333%'}}>Lastname</th>
              <th style={{width: '33.333333%'}}>Email</th>
            </tr>
            {this.state.users.map(User =>
              <tr key={User.id}>
                <td>{User.firstname}</td>
                <td>{User.lastname}</td>
                <td>{User.email}</td>
              </tr>)}
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
