import React from 'react';

import './UserEditWidget.css';
import {Button, Form, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';

export const UserEditWidget = () => {
  return (
    <div className="userEditWidget">
      <h2>Edit Profile</h2>
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={4}>
            First Name
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="First Name"/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={4}>
            Last Name
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="Last Name"/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={4}>
            Email Address
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="Email Address"/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={4}>
            Password
          </Col>
          <Col sm={4}>
            <FormControl type="password" placeholder="Password"/>
          </Col>
        </FormGroup>
        <FormGroup style={{textAlign: "left"}}>
          <Col smOffset={4} sm={10}>
            <Button type="submit">
              Confirm
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
};
