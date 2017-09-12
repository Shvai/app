import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

class UserRow extends Component {
  render() {
    return (
      <tr key={this.props.users.id}>
        <td>{this.props.users.firstname}</td>
        <td className="lastname">{this.props.users.lastname}</td>
        <td>{this.props.users.email}</td>
        <td>
          <Button onClick={this.props.handleToggle}>Edit</Button>
          <Button>Delete</Button>
        </td>
      </tr>
    )
  }
}

UserRow.propTypes = {
  users: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default UserRow;