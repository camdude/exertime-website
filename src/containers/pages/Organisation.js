import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import PageWrapper from '../PageWrapper/PageWrapper';
import ContentBox from '../../components/ContentBox/ContentBox';
import Button from '../../components/UI/Button/Button';
import DynamicForm from '../../components/DynamicForm/Form';
import DataTable from '../../components/DataTable/DataTable';

class Organisation extends Component {
  state = {
    groupData: {
      head: [
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
        {id: "a1", data: ["Exertime Project", "EPro", 120, 180, 15, "Walk", 120, "true"]}
      ]
    },
    addRegistForm: false,
    registData: {
      head: [
        {heading: "Registration Key", type: "text", data: ""},
        {heading: "Remaining", type: "number", data: ""},
        {heading: "Used", type: "number", data: ""},
        {heading: "Total", type: "number", data: ""}
      ],
      data: [
        {id: "a1", data: ["o4u3r20o-lu85-5h1w-g4d3-cvzjc6rurp2k", 22, 0, 22]}
      ]
    },
    addRegistForm: false
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

  onAddGroupEntry = () => {
    this.setState({addGroupForm: true});
  }

  onAddRegistEntry = () => {
    this.setState({addRegistForm: true});
  }

  onGroupFormSubmit = (event) => {
    const tableData = this.state.groupData;

    const formSub = [];
    for(let v in tableData.head) {
      formSub.push(tableData.head[v].data);
    }
    const newEntry = {id: this.randomString(19), data: formSub}

    tableData.data.push(newEntry);
    this.setState({groupData: tableData});

    // TODO: Update database

    this.setState({addGroupForm: false});
  }

  onRegistFormSubmit = (event) => {
    const tableData = this.state.registData;

    const formSub = [];
    for(let v in tableData.head) {
      formSub.push(tableData.head[v].data);
    }
    const newEntry = {id: this.randomString(19), data: formSub}

    tableData.data.push(newEntry);
    this.setState({registData: tableData});

    // TODO: Update database

    this.setState({addRegistForm: false});
  }

  render() {
    return (
      <PageWrapper>
        <NavLink to="/group">Example Group</NavLink>
        <ContentBox title="{Org Name}">
          <ContentBox title="Groups" underline>
            {(this.state.addGroupForm) ? <DynamicForm inputs={this.state.groupData.head} buttonLabel="Add Registration" onSubmit={this.onGroupFormSubmit}/> : <Button clicked={this.onAddGroupEntry}>New Registration</Button>}
            <DataTable head={this.state.groupData.head} data={this.state.groupData.data}/>
          </ContentBox>
          <ContentBox title="Registrations" underline>
            {(this.state.addRegistForm) ? <DynamicForm inputs={this.state.registData.head} buttonLabel="Add Registration" onSubmit={this.onRegistFormSubmit}/> : <Button clicked={this.onAddRegistEntry}>New Registration</Button>}
            <DataTable head={this.state.registData.head} data={this.state.registData.data}/>
          </ContentBox>
        </ContentBox>
      </PageWrapper>
    );
  }
}

export default Organisation;