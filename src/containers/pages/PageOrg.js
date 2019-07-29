import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actionTypes from '../../store/actions';
import PageWrapper from '../../containers/PageWrapper/PageWrapper';
import ContentBox from '../../components/ContentBox/ContentBox';
import Button from '../../components/UI/Button/Button';
import DynamicForm from '../../components/DynamicForm/Form';
import DataTable from '../../components/DataTable/DataTable';

class PageOrg extends Component {
  state = {
    tableData: {
      head: [
        {heading: "Short Name", type: "text", data: ""},
        {heading: "Name", type: "text", data: ""},
        {heading: "Countdown Duration", type: "number", data: ""},
        {heading: "Walking Ex Delay", type: "number", data: ""}
      ],
      data: [
        {id: "a1", data: ["UTAS", "University of Tasmania", 1, 0]}
      ]
    },
    addForm: false
  }

  componentDidMount() {
    // TODO: Get data from database and format for component

  }

  randomString(length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  } 

  onAddEntry = () => {
    this.setState({addForm: true});
  }

  onFormSubmit = (event) => {
    const formSub = [];
    for(let v in this.state.tableData.head) {
      formSub.push(this.state.tableData.head[v].data);
    }
    const newEntry = {id: this.randomString(19), data: formSub}

    const tableData = this.state.tableData;
    tableData.data.push(newEntry);
    this.setState({tableData: tableData});

    // TODO: Update database

    this.setState({addForm: false});
  }

  render() {
    return (
      <PageWrapper showModal={this.props.mdl} modalClosed={this.props.onClodeModal}>
        <ContentBox title="Organisations">
          {(this.state.addForm) ? <DynamicForm inputs={this.state.tableData.head} buttonLabel="Add Organisation" onSubmit={this.onFormSubmit}/> : <Button clicked={this.onAddEntry}>New Organisation</Button>}
          <DataTable head={this.state.tableData.head} data={this.state.tableData.data} length="10" page="1" />
        </ContentBox>
      </PageWrapper>
    );
  }
}


const mapStateToProps = state => {
  return {
      mdl: state.mdl.modal
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onOpenModal: () => dispatch({type: actionTypes.OPEN}),
      onClodeModal: () => dispatch({type: actionTypes.CLOSE})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageOrg);
