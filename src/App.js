import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import PageHome from './containers/pages/PageHome';
import PageOrg from './containers/pages/PageOrg';
import PageGroups from './containers/pages/PageGroups';
import PageUsers from './containers/pages/PageUsers';
import PageExer from './containers/pages/PageExer';
import PageRegist from './containers/pages/PageRegist';
import PageGlobal from './containers/pages/PageGlobal';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/global" component={PageGlobal}/>
        <Route path="/registrations" component={PageRegist}/>
        <Route path="/exercises" component={PageExer}/>
        <Route path="/users" component={PageUsers}/>
        <Route path="/groups" component={PageGroups}/>
        <Route path="/organisations" component={PageOrg}/>
        <Route path="/" exact component={PageHome}/>
      </Switch>
    );
  }
}

export default App;
