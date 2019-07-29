import React, { Component } from 'react';

import PageWrapper from '../PageWrapper/PageWrapper';
import ContentBox from '../../components/ContentBox/ContentBox';
import Button from '../../components/UI/Button/Button';
import DynamicForm from '../../components/DynamicForm/Form';
import DataTable from '../../components/DataTable/DataTable';

class PageExer extends Component {
  state = {
    tableData: {
      head: [
        {heading: "Caption", type: "text", data: ""},
        {heading: "Type", type: "text", data: ""},
        {heading: "Image", type: "img", data: ""},
        {heading: "Status", type: "text", data: ""},
        {heading: "Kilojoules", type: "number", data: ""},
        {heading: "Calc. Type", type: "text", data: ""}
      ],
      data: [
        {id: "a1", data: ["Arm Pumps with Foot Tap", "Easy", "", "Inactive", 0.007389, "Duration"]}
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
        <ContentBox title="Exercises">
          {(this.state.addForm) ? <DynamicForm inputs={this.state.tableData.head} buttonLabel="Add Exercise" onSubmit={this.onFormSubmit}/> : <Button clicked={this.onAddEntry}>New Exercise</Button>}
          <DataTable head={this.state.tableData.head} data={this.state.tableData.data}/>
        </ContentBox>
      </PageWrapper>
    );
  }
}

export default PageExer;
