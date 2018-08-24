import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import { APPLIED_STATE, INTERVIEWING_STATE, HIRED_STATE } from 'actions/types';
import UserCardComponent from 'components/userCard/UserCardComponent';
import * as styles from 'components/board/styles';

class BoardComponent extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired,
    changeUserState: PropTypes.func.isRequired
  }

  renderList = (list) => {
    const { changeUserState } = this.props;

    return list.map((user) => {
      return (
        <UserCardComponent key={user.id.value} user={user} changeUserState={changeUserState} />
      );
    });
  }

  render() {
    const { userList } = this.props;

    const appliedList = userList.filter((user) => {
      return user.state === APPLIED_STATE;
    });
    const interviewingList = userList.filter((user) => {
      return user.state === INTERVIEWING_STATE;
    });
    const hiredList = userList.filter((user) => {
      return user.state === HIRED_STATE;
    });

    return (
      <Container>
        <Row style={styles.rowStyle}>
          <Col style={styles.colStyle}>
            <div
              className="d-flex justify-content-center"
              style={styles.titleStyle}
            >
              Applied
            </div>
            {this.renderList(appliedList)}
          </Col>
          <Col style={styles.colStyle}>
            <div
              className="d-flex justify-content-center"
              style={styles.titleStyle}
            >
              Interviewing
            </div>
            {this.renderList(interviewingList)}
          </Col>
          <Col style={styles.colStyle}>
            <div
              className="d-flex justify-content-center"
              style={styles.titleStyle}
            >
              Hired
            </div>
            {this.renderList(hiredList)}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BoardComponent;
