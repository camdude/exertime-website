import React, { Component } from 'react';

import PageWrapper from '../PageWrapper/PageWrapper';
import ContentBox from '../../components/ContentBox/ContentBox';
import Button from '../../components/UI/Button/Button';
import DynamicForm from '../../components/DynamicForm/Form';
import DataTable from '../../components/DataTable/DataTable';

class PageGlobal extends Component {
  state = {
    globalForm: [
      {heading: "Countdown Duration", type: "number", data: 3},
      {heading: "Helpful Hints Delay", type: "number", data: 8},
      {heading: "Delay Before Prompt", type: "number", data: 5},
      {heading: "Auto Prompt Exercise", type: "text", data: "Arm Pumps with Foot Tap"}
    ],
    tableData: {
      head: [
        {heading: "Department", type: "text", data: ""},
        {heading: "Hint", type: "text", data: ""},
        {heading: "Hint Order", type: "text", data: ""}
      ],
      data: [
        {id: "a3ndOHUXDpSInia5ML3", data: ["n/a", "Take a Hike!", 1]},
        {id: "IraR6WywztFkcCzuUP3", data: ["None", "It appears you have been away from your desk. Simply click Take a Hike, record your walking time, and return to work!", 1]},
        {id: "e4A8VGC3DrHnIGDcHHS", data: ["None", "Watch this space for helpful Exertime hints.", 0]}
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

  onGlobalFormSubmit = (event) => {
    // TODO: Update database

    alert("Global Settings Updated");
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
        <ContentBox title="Global">
          <DynamicForm heading="Global Settings" inputs={this.state.globalForm} buttonLabel="Save Settings" onSubmit={this.onGlobalFormSubmit}/>
        </ContentBox>
        <ContentBox title="Hints">
          {(this.state.addForm) ? <DynamicForm heading="New Hint" inputs={this.state.tableData.head} buttonLabel="Add Hint" onSubmit={this.onFormSubmit}/> : <Button clicked={this.onAddEntry}>New Hint</Button>}
          <DataTable head={this.state.tableData.head} data={this.state.tableData.data}/>
        </ContentBox>
      </PageWrapper>
    );
  }
}

export default PageGlobal;
