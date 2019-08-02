import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PageWrapper from '../../containers/PageWrapper/PageWrapper';
import ContentBox from '../../components/ContentBox/ContentBox';
import Organisation from './Organisation';
import OrgCard from '../../components/Card/OrgCard/OrgCard';
import CardGroup from '../../components/Card/CardGroup/CardGroup';
import DynamicForm from '../../components/DynamicForm/Form';
import Button from '../../components/UI/Button/Button';

class PageOrg extends Component {
  state = {
    organisations: [],
    formData: [
      {heading: "Name", type: "text", data: ""},
      {heading: "Short Name", type: "text", data: ""},
      {heading: "Countdown Duration", type: "number", data: ""},
      {heading: "Walking Ex Delay", type: "number", data: ""}
    ],
    addForm: false
  }

  componentDidMount() {
    const orgs = this.props.org.state.organisations;
    const organisations = [];

    orgs.forEach(org => {
      const grps = [];
      for (let i = 0; i < org.groups.length  && i < 3; i++) {
        grps.push(org.groups[i].name);
      }

      organisations.push({
        id: org.id, 
        data: {
          name: org.name, 
          shortName: org.shortName, 
          settings: {
            cdnDur: org.settings.countdownDuration, 
            walkExDelay: org.settings.walkingExDelay
          },
          groups: grps
        }
      }
    );
    });

    this.setState({organisations: organisations});

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

  onFormSubmit = () => {
    const formSub = this.state.formData;
    const newEntry = {
      id: this.randomString(19), 
      data: {
        name: formSub[0].data, 
        shortName: formSub[1].data, 
        settings: {
          cdnDur: formSub[2].data, 
          walkExDelay: formSub[3].data
        }
      }
    }

    const data = this.state.organisations;
    data.push(newEntry);
    this.setState({organisations: data});

    // TODO: Update database

    this.setState({addForm: false});
  }

  render() {
    const orgList = this.state.organisations.map((org) => {
      return (
        <OrgCard key={org.id} name={org.data.name} url={this.props.match.url + '/' + org.data.shortName} groups={org.data.groups}/>
      );
    });

    return (
      <PageWrapper showModal={this.props.mdl} modalClosed={this.props.onClodeModal}>
        <ContentBox title="Organisations">
          {(this.state.addForm) ? <DynamicForm inputs={this.state.formData} buttonLabel="Add Organisation" onSubmit={this.onFormSubmit}/> : <Button clicked={this.onAddEntry}>New Organisation</Button>}
          <CardGroup>
            {orgList}
          </CardGroup>
        </ContentBox>
        <Route path={this.props.match.url + "/:id"} component={Organisation}/>
      </PageWrapper>
    );
  }
}


const mapStateToProps = state => {
  return {
      org: state.org
  };
}

export default connect(mapStateToProps, null)(PageOrg);
