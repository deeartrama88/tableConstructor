import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TableConstructor from '../containers/tableConstructor'

class Main extends Component {
    render() {
        return (
            <div className="container">
                <h1>Main wrap component</h1>
                <TableConstructor />
                {this.props.children}
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {

    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(Main);