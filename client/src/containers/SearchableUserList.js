import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import {UserCreateWidget} from '../components/User/UserCreateWidget/UserCreateWidget';
import {UserEditWidget} from '../components/User/UserEditWidget/UserEditWidget';
import {SearchBar} from "../components/User/SearchBar/SearchBar";
import {UserList} from "../components/User/UserList/UserList";
import {usersFetchData} from '../actions/UserActions';

class SearchableUserList extends React.Component {
  constructor() {
    super();
    this.state = {
      addVisible: false,
      editVisible: false,
      filterText: ''
    };
    this.handleCreateUserClick = this.handleCreateUserClick.bind(this);
    this.handleEditUserToggle = this.handleEditUserToggle.bind(this);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchData('/users');
    /*
    fetch('/users')
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        this.setState({ isLoading: false });
        return res;
      })
      .then(res => res.json())
      .then(users => this.setState({users}))
      .catch(() => this.setState({ hasError: true }));
      */
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
    if (this.props.hasError) {
      return <h2>Sorry! There was an error loading users</h2>;
    }
    if (this.props.isLoading) {
      return <h2>Loading…</h2>;
    }

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
          users={this.props.users}
          filterText={this.state.filterText}
          handleToggle={this.handleEditUserToggle}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    hasError: state.usersHasError,
    isLoading: state.usersIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(usersFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchableUserList);