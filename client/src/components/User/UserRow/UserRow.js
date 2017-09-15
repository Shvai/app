import React from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export const UserRow = (props) => {
  return (
    <tr>
      <td>{props.users.firstname}</td>
      <td className="lastname">{props.users.lastname}</td>
      <td>{props.users.email}</td>
      <td>
        <Button onClick={props.handleToggle}>Edit</Button>
        <Button>Delete</Button>
      </td>
    </tr>
  )
};

UserRow.propTypes = {
  users: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  handleToggle: PropTypes.func.isRequired,
};