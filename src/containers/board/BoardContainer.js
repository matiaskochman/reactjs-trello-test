import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'actions';

import BoardComponent from 'components/board/BoardComponent';

class BoardContainer extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    changeUserState: PropTypes.func.isRequired,
    conexionError: PropTypes.bool
  }

  componentWillMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    const { changeUserState, conexionError } = this.props;
    const { userList } = this.props;

    if (conexionError === false) {
      return (
        <BoardComponent userList={userList} changeUserState={changeUserState} />
      );
    }
    return <div>Connection Error!!!!!!</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.userState.userList,
    conexionError: state.userState.conexionError
  };
};
export default connect(mapStateToProps, actions)(BoardContainer);
