import React, {Component} from 'react';
import './Table.css';
import {Well, Button, Form, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';


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
        <h1>User List <Button onClick={this.onClick}>Add+</Button></h1>
        { !this.state.editVisible ? null : (
          <div className="editPage">
            <h2>Edit Page</h2>
            <Form horizontal>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={4}>
                  First Name
                </Col>
                <Col sm={6}>
                  <FormControl type="text" placeholder="First Name" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={4}>
                  Last Name
                </Col>
                <Col sm={6}>
                  <FormControl type="text" placeholder="Last Name" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={4}>
                  Email Address
                </Col>
                <Col sm={6}>
                  <FormControl type="text" placeholder="Email Address" />
                </Col>
              </FormGroup>
              <FormGroup style={{textAlign:"left"}} >
                <Col smOffset={4} sm={10}>
                  <Button type="submit">
                    Confirm
                  </Button>
                </Col>
              </FormGroup>
            </Form>
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
                <Button onClick={this.onClick}>Edit</Button>
                <Button>Delete</Button>
              </td>
            </tr>)}
        </table>
      </div>
    );
  }
}

export default Table;
