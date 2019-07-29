import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import PageWrapper from '../../containers/PageWrapper/PageWrapper';
import ContentBox from '../../components/ContentBox/ContentBox';
import DataTable from '../../components/DataTable/DataTable';

class Group extends Component {
  state = {
    tableData: {
      head: [
        {heading: "Pref Name", type: "text"},
        {heading: "Given Name", type: "text"},
        {heading: "Surname", type: "text"},
        {heading: "Username", type: "text"},
        {heading: "Email", type: "text"},
        {heading: "Emergency Exit", type: "bool"},
        {heading: "Status", type: "text"},
        {heading: "Calorie Goal (Overide)", type: "number"},
        {heading: "New User", type: "bool"}
      ],
      data: [
        {id: "a1", data: ["", "Exertime", "Administrator", "admin", "@", "true", "Active", 0, "false"]}
      ]
    }
  }

  render() {
    return (
      <PageWrapper>
        <NavLink to="/user">Example User</NavLink>
        <ContentBox title="{Org Name} -> {Group Name}">
            <ContentBox title="Users" underline>
            <DataTable head={this.state.tableData.head} data={this.state.tableData.data}/>
            </ContentBox>
        </ContentBox>
      </PageWrapper>
    );
  }
}

export default Group;
