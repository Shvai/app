import React, {Component} from 'react';
import './UserList.css';
import {Button} from 'react-bootstrap';
import UserCreateWidget from "../UserCreateWidget/UserCreateWidget";


class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      addVisible: false
    };
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  onClick() {
    this.setState({addVisible: !this.state.addVisible});
  }

  render() {
    return (
      <div className="Table">
        <h1>User List <Button onClick={this.onClick}>Create</Button></h1>
        { !this.state.addVisible ? null : (
          <UserCreateWidget/>
        )}
        <table className="myTable">
          <tr className="header">
            <th style={{width: '25%'}}>Firstname</th>
            <th style={{width: '25%'}}>Lastname</th>
            <th style={{width: '25%'}}>Email</th>
            <th style={{width: '25%'}}>Modify</th>
          </tr>
          {this.state.users.sort(function (a, b) {
            let nameA = a.lastname.toUpperCase(); // ignore upper and lowercase
            let nameB = b.lastname.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          }).map(User =>
            <tr key={User.id}>
              <td>{User.firstname}</td>
              <td className="lastname">{User.lastname}</td>
              <td>{User.email}</td>
              <td>
                <Button onClick={this.onClick}>Edit</Button>
                <Button>Delete</Button>
              </td>
            </tr>)}
        </table>
      </div>
    );
  }
}

export default UserList;
