import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import { APPLIED_STATE, INTERVIEWING_STATE, HIRED_STATE } from 'actions/types';
import UserCardComponent from 'components/userCard/UserCardComponent';

class BoardComponent extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
  }

  renderList = (list) => {
    return list.map((user) => {
      return (
        <UserCardComponent />
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

    const colStyle = {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    };
    const titleStyle = {
      marginBottom: 30,
      alignSeft: 'flex-start'
    };
    return (
      <Container>
        <Row style={{ justifyContent: 'flex-start' }}>
          <Col style={colStyle}>
            <div
              className="d-flex justify-content-center"
              style={titleStyle}
            >
              Applied
            </div>
            {this.renderList(appliedList)}
          </Col>
          <Col style={colStyle}>
            <div className="d-flex justify-content-center">Interviewing</div>
            {this.renderList(interviewingList)}
          </Col>
          <Col style={colStyle}>
            <div className="d-flex justify-content-center">Hired</div>
            {this.renderList(hiredList)}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BoardComponent;
