import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { APPLIED_STATE, INTERVIEWING_STATE, HIRED_STATE } from 'actions/types';

export default class UserCardComponent extends Component {
  render() {
    const cardStyle = {
      margin: 10
    };
    const imgStyle = {
      width: '50%',
      height: '50%',
      borderRadius: '30%'
    };
    return (
      <Card style={cardStyle}>
        <CardImg style={imgStyle} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
    );
  }
}
