import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageWrapper from '../PageWrapper/PageWrapper';
import ContentBox from '../../components/ContentBox/ContentBox';
import DynamicForm from '../../components/DynamicForm/Form';
import OrgCard from '../../components/Card/OrgCard/OrgCard';
import CardGroup from '../../components/Card/CardGroup/CardGroup';


class Organisation extends Component {
  state = {
    orgData: null,
    groups: [
      {id: "jJ4cbj26fFYK1Mwg8nS", data: ["Exertime Project", "EPro", 120, 180, 15, "Walk", 120, "true"]}
    ],
    registrations: [
      {id: "jJ4cbj26fFYK1Mwg8nS", data: ["Exertime Project", "EPro", 120, 180, 15, "Walk", 120, "true"]}
    ],
    groupData: [
      {heading: "Group Name", type: "text", data: ""},
      {heading: "Short Name", type: "text", data: ""},
      {heading: "Run Time", type: "number", data: ""},
      {heading: "Completion", type: "number", data: ""},
      {heading: "Postpone Interval", type: "number", data: ""},
      {heading: "Defualt Exercise", type: "text", data: ""},
      {heading: "Delay", type: "number", data: ""},
      {heading: "Emergency Exit", type: "bool", data: ""}
    ],
    addGroupForm: false,
    registData: [
      {heading: "Registration Key", type: "text", data: ""},
      {heading: "Remaining", type: "number", data: ""},
      {heading: "Used", type: "number", data: ""},
      {heading: "Total", type: "number", data: ""}
    ],
    addRegistForm: false
  }

  componentDidMount() {
    const toGet = this.props.match.params.org;
    
    const allOrgs = this.props.org.state.organisations;
    allOrgs.forEach(org => {
      if(org.shortName === toGet) {
        this.setState({orgData: org});
      }
    });

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
    let loadedPage = null;
    if(this.state.orgData) {
      const groupList = this.state.orgData.groups.map((grp, i) => {
        return (
          <OrgCard key={i} name={grp.name} url={this.props.match.url + '/' + grp.shortName}/>
        );
      })
      loadedPage = (
        <ContentBox title={this.state.orgData.name}>
          <ContentBox title="Groups" underline>
            <CardGroup>
             {groupList}            
            </CardGroup>
          </ContentBox>
          <ContentBox title="Registrations" underline>
            <DynamicForm inputs={this.state.registData} buttonLabel="Add Registration" onSubmit={this.onRegistFormSubmit}/>
          </ContentBox>
        </ContentBox>
      );
      
    }

    return (
      <PageWrapper>
        {loadedPage}
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
      org: state.org
  };
}

export default connect(mapStateToProps, null)(Organisation);