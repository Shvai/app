import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class User extends Component {
  render() {
    return (
      <tr key={User.id}>
        <td>{User.firstname}</td>
        <td className="lastname">{User.lastname}</td>
        <td>{User.email}</td>
        <td>
          <Button onClick={this.onClick}>Edit</Button>
          <Button>Delete</Button>
        </td>
      </tr>
    )
  }
}

export default User;