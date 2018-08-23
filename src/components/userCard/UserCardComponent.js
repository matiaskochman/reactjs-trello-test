import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle, Button
} from 'reactstrap';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import * as styles from 'components/userCard/styles';

import { APPLIED_STATE, INTERVIEWING_STATE, HIRED_STATE } from 'actions/types';

export default class UserCardComponent extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render() {
    const { user } = this.props;

    return (
      <Card style={styles.cardStyle}>
        <div style={styles.bodyStyle}>
          <img style={styles.imgStyle} src={user.picture.large} alt="Smiley face" />          
          <CardBody style={styles.nameStyle}>
            <CardTitle style={styles.titleStyle}>{user.name.first}</CardTitle>
            <CardTitle style={styles.titleStyle}>{user.name.last}</CardTitle>
          </CardBody>
        </div>
        <div style={styles.buttonsStyle}>
          <Button style={styles.buttonStyle}>
            <FaLessThan style={styles.iconStyle} />
          </Button>
          <Button style={styles.buttonStyle}>
            <FaGreaterThan style={styles.iconStyle} />
          </Button>
        </div>
      </Card>
    );
  }
}
