import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './UserList.css';
import UserRow from '../UserRow/UserRow';

class UserList extends Component {

  render() {
    let rows = [];

    this.props.users.sort((a, b) => {
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
        if (User.firstname.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1
          && User.lastname.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1) {
          return;
        }
        rows.push(<UserRow users={User} handleToggle={this.props.handleToggle}/>)
      }
    );

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
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
  filterText: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default UserList;
