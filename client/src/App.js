import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(User => <div key={User.id}>{User.firstname} {User.lastname}</div>)}
      </div>
    );
  }
}

export default App;
