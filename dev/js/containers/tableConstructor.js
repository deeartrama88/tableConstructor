import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {tableConstructor} from '../actions/tableConstructor'

class TableConstructor extends Component {
    
    componentDidMount(){
        
    }

    render() {
        return (
            <div className="tableConstructor">
               <h1>Table constructor component</h1>
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
        tableConstructor
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(TableConstructor);




