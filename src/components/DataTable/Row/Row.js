import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

import * as actionTypes from '../../../store/actions';
import './Row.css'
import Button from '../../UI/Button/Button';

class Row extends Component {
    state = {
        editMode: false,
        saving: false,
        data: null
    }

    componentWillMount() {
        this.setState({data: this.props.data});
    }

    toggleEditMode = () => {
        if (this.state.editMode) {
            this.setState({saving: true});

            // TODO: Save updated details
            alert("Entry Updated: \n" + this.state.data);

            this.setState({editMode: false, saving: false});
        } else {
            this.setState({editMode: true});
        }
    }

    deleteRow = () => {
        this.setState({editMode: false});
        this.props.delClick();
    }

    onChangeInput = (event, index) => {
        this.props.data[index] = event.target.value;
        const data = this.state.data;
        data[index] = event.target.value;
        this.setState({data: data});
    }

    render() {
        const rowItems = this.state.data.map((value, index) => {
            return (
                <td key={index}>
                    {value}
                </td>
            );
        });

        const row = (
            <tr className="row">
                {rowItems}
                <td width="100px">
                    <Button clicked={this.toggleEditMode}>Edit</Button>
                    <Button clicked={this.deleteRow}>Delete</Button>
                </td>
            </tr>
        );

        const editRowItems = this.state.data.map((value, index) => {
            return (
                <td key={index}>
                    <input type="text" value={value} onChange={(e) => this.onChangeInput(e, index)}/>
                </td>
            );
        });

        const editRow = (
            <tr className="editRow">
                {editRowItems}
                <td>
                    <Button clicked={this.toggleEditMode}>Save</Button>
                </td>
            </tr>
        );

        return (
            <Fragment>
                {this.state.editMode ? editRow : row}
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOpenModal: () => dispatch({type: actionTypes.OPEN}),
        onOpenConfirmModal: (data) => dispatch({type: actionTypes.OPEN_CONFRIM, data: data}),
        onCloseModal: () => dispatch({type: actionTypes.CLOSE})
    };
}

export default connect(null, mapDispatchToProps)(Row);
