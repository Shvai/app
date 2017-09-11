import React,{Component} from 'react';
import {Button} from 'react-bootstrap';

import UserCreateWidget from '../UserCreateWidget/UserCreateWidget';
import SearchBar from "../SearchBar/SearchBar";
import UserList from "../UserList/UserList";

class SearchableUserList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      addVisible: false,
      filterText: ''
    };
    this.handleCreateUserClick = this.handleCreateUserClick.bind(this);
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  handleCreateUserClick() {
    this.setState({addVisible: !this.state.addVisible});
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <h1>User List <Button onClick={this.handleCreateUserClick}>Create</Button></h1>
        {!this.state.addVisible ? null : (<UserCreateWidget/>)}
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <UserList
          users={this.state.users}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default SearchableUserList;