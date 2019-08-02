import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import PageHome from './containers/pages/PageHome';
import PageOrg from './containers/pages/PageOrg';
import PageExer from './containers/pages/PageExer';
import PageGlobal from './containers/pages/PageGlobal';
import Organisation from './containers/pages/Organisation';
import Group from './containers/pages/Group';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/global" component={PageGlobal}/>
        <Route path="/group" component={Group}/>
        <Route path="/org" component={Organisation}/>
        <Route path="/exercises" component={PageExer}/>
        <Route path="/organisations/:org/:grp" component={Group}/>
        <Route path="/organisations/:org" component={Organisation}/>
        <Route path="/organisations" exact component={PageOrg}/>
        <Route path="/" exact component={PageHome}/>
      </Switch>
    );
  }
}

export default App;
