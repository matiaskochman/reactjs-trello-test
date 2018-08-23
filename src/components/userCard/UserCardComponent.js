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
    user: PropTypes.object.isRequired,
    changeUserState: PropTypes.func.isRequired
  }

  clickLeftButton = (user) => {
    console.log('leftclick');
    const { changeUserState } = this.props;

    switch (user.state) {
      case INTERVIEWING_STATE: {
        changeUserState(user, APPLIED_STATE);
        break;
      }
      case HIRED_STATE: {
        changeUserState(user, INTERVIEWING_STATE);
        break;
      }
      default:
        break;
    }
  }

  clickRightButton = (user) => {
    console.log('rightclick');
    const { changeUserState } = this.props;

    switch (user.state) {
      case APPLIED_STATE: {
        changeUserState(user, INTERVIEWING_STATE);
        break;
      }
      case INTERVIEWING_STATE: {
        changeUserState(user, HIRED_STATE);
        break;
      }
      default:
        break;
    }
  }

  render() {
    const { user, changeUserState } = this.props;

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
          <div style={styles.buttonLeftStyle}>
            {
              user.state !== APPLIED_STATE
              && (
                <Button style={styles.buttonStyle} onClick={() => this.clickLeftButton(user)}>
                  <FaLessThan style={styles.iconStyle} />
                </Button>
              )
            }
          </div>
          <div style={styles.buttonRightStyle}>
            {
              user.state !== HIRED_STATE
            && (
              <Button style={styles.buttonStyle} onClick={() => this.clickRightButton(user)}>
                <FaGreaterThan style={styles.iconStyle} />
              </Button>
            )
            }
          </div>
        </div>
      </Card>
    );
  }
}
