import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

import {UserCreateWidget} from '../components/User/UserCreateWidget/UserCreateWidget';
import {UserEditWidget} from '../components/User/UserEditWidget/UserEditWidget';
import {SearchBar} from "../components/User/SearchBar/SearchBar";
import {UserList} from "../components/User/UserList/UserList";

class SearchableUserList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      addVisible: false,
      editVisible:false,
      editUserID: '',
      filterText: ''
    };
    this.handleCreateUserClick = this.handleCreateUserClick.bind(this);
    this.handleEditUserToggle = this.handleEditUserToggle.bind(this);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  handleCreateUserClick() {
    this.setState({
      addVisible: !this.state.addVisible,
      editVisible: false
    });
  }

  handleEditUserToggle() {
    this.setState({
      editVisible: !this.state.editVisible,
      addVisible: false
    });
  }

  handleFilterTextInputChange(e) {
    this.setState({
      filterText: e.target.value
    });
  }


  render() {
    return (
      <div>
        <h1>User List <Button onClick={this.handleCreateUserClick}>Create</Button></h1>
        {!this.state.addVisible ? null : (<UserCreateWidget/>)}
        {!this.state.editVisible ? null : (<UserEditWidget/>)}
        <SearchBar
          filterText={this.state.filterText}
          onChange={this.handleFilterTextInputChange}
        />
        <UserList
          users={this.state.users}
          filterText={this.state.filterText}
          handleToggle={this.handleEditUserToggle}
        />
      </div>
    );
  }
}

SearchableUserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
  filterText: PropTypes.string.isRequired,
  editVisible: PropTypes.bool.isRequired,
  addVisible: PropTypes.bool.isRequired
};

export default SearchableUserList;