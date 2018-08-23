import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardComponent from 'components/board/BoardComponent';

class BoardContainer extends Component {
    render(){
        return(
            <BoardComponent />
        )
    }
}

export default BoardContainer;