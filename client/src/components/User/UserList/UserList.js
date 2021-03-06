import React from 'react';
import PropTypes from 'prop-types';

import './UserList.css';
import {UserRow} from '../UserRow/UserRow';

export const UserList = (props) => {
  let rows = [];

  props.users.sort((a, b) => {
    let nameA = a.lastname.toUpperCase();
    let nameB = b.lastname.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }).map(User => {
    if (User.firstname.toUpperCase().indexOf(props.filterText.toUpperCase()) === -1
      && User.lastname.toUpperCase().indexOf(props.filterText.toUpperCase()) === -1) {
      return;
    }
    rows.push(<UserRow
      key={User.id}
      users={User}
      handleToggle={props.handleToggle}
      onDelete={() => props.onDelete(User.id)}/>);
  });

  return (
    <div className="Table">
      <table className="myTable">
        <tr className="header">
          <th style={{width: '25%'}}>Firstname</th>
          <th style={{width: '25%'}}>Lastname</th>
          <th style={{width: '25%'}}>Email</th>
          <th style={{width: '25%'}}>Modify</th>
        </tr>
        {rows}
      </table>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
  filterText: PropTypes.string.isRequired
};