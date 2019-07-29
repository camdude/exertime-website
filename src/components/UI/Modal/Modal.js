import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import * as actionTypes from '../../../store/actions';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Fragment>
        );
    }

    
};

const mapStateToProps = state => {
    return {
        mdlData: state.mdl.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onOpenModal: () => dispatch({type: actionTypes.OPEN}),
        onClodeModal: () => dispatch({type: actionTypes.CLOSE})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);