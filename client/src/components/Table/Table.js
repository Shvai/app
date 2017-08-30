import React, {Component} from 'react';
import './Table.css';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      editVisible: false
    };
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  onClick() {
    this.setState({editVisible: !this.state.editVisible});
  }

  render() {
    return (
      <div className="Table">
        <h1>User List</h1>
        { !this.state.editVisible ? null : (
          <div>
            <h2>Edit Page</h2>
            <ul>
              <li>First name:<input type="text" name="firstname"/></li>
              <li>Last name:<input type="text" name="lastname"/></li>
            </ul>
          </div>
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
                <button onClick={this.onClick}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>)}
        </table>
      </div>
    );
  }
}

export default Table;
