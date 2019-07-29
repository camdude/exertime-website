import React, { Component } from 'react';

import PageWrapper from '../../containers/PageWrapper/PageWrapper';
import ContentBox from '../../components/ContentBox/ContentBox';
import Button from '../../components/UI/Button/Button';
import DynamicForm from '../../components/DynamicForm/Form';
import DataTable from '../../components/DataTable/DataTable';

class PageGroups extends Component {
  state = {
    tableData: {
      head: [
        {heading: "Organisation", type: "text", data: ""},
        {heading: "Group Name", type: "text", data: ""},
        {heading: "Short Name", type: "text", data: ""},
        {heading: "Run Time", type: "number", data: ""},
        {heading: "Completion", type: "number", data: ""},
        {heading: "Postpone Interval", type: "number", data: ""},
        {heading: "Defualt Exercise", type: "text", data: ""},
        {heading: "Delay", type: "number", data: ""},
        {heading: "Emergency Exit", type: "bool", data: ""}
      ],
      data: [
        {id: "a1", data: ["UTAS", "Exertime Project", "EPro", 120, 180, 15, "Walk", 120, "true"]}
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
      <PageWrapper>
        <ContentBox title="Groups">
          {(this.state.addForm) ? <DynamicForm inputs={this.state.tableData.head} buttonLabel="Add Group" onSubmit={this.onFormSubmit}/> : <Button clicked={this.onAddEntry}>New Group</Button>}
          <DataTable head={this.state.tableData.head} data={this.state.tableData.data}/>
        </ContentBox>
      </PageWrapper>
    );
  }
}

export default PageGroups;
