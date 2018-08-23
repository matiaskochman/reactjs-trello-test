import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'actions';

import BoardComponent from 'components/board/BoardComponent';

class BoardContainer extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    const { userList } = this.props;
    console.log(userList);
    return (
      <BoardComponent userList={userList} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.userList
  };
};
export default connect(mapStateToProps, actions)(BoardContainer);
