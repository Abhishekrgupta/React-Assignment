import React, { Component } from "react";

// css import
import "./App.css";

// component imports
import Login from "./container/shared/login";
import Logout from './container/shared/logout';

import OperatorComponent from './container/admin/OperatorDashboard';
import UserComponent from './container/user/UserDashboard';

import NewUser from "./container/admin/NewUser";
import Role from "./container/admin/Role";
import PersonalInfo from "./container/admin/PersonalInfo";

import Error from "./container/shared/Error";

// react module
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Users from "./container/admin/Users";
import Person from "./container/shared/Person";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Router history={history}>
          <Route path="/" component={ Login } />
        </Router> */}

        <Router history={history}>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/admin-dashboard" component={ Users } />
            <Route exact path="/operator-dashboard" component={ OperatorComponent } />
            <Route exact path="/user-dashboard/:uid/:id" component={ UserComponent } />
          
            <Route exact path="/new-user" component={ NewUser } />
            <Route exact path="/role" component={ Role } />
            <Route exact path="/users" component={ Users } />
            
            <Route exact path="/add-user-personal-info" component={ PersonalInfo } />
            <Route exact path="/add-user-personal-info/:uid" component={ PersonalInfo } />
            <Route exact path="/person/:uid/:id" component={ Person } />
            
            <Route exact path="/logout" component={ Logout } />
            <Route exact path="**" component={ Error } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
