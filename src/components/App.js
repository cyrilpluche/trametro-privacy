import React, { Component } from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom'
import logo from '../trametro-logo.png';

import { customPalette } from "./Style";
import { MuiThemeProvider } from "@material-ui/core/es/styles";
import customHistory from '../helper/History'

import Appbar from './Appbar'
import PolicyDialog from './PolicyDialog'
import Home from './Home'
import Help from './Help'
import Bottombar from './Bottombar'
import {withStyles} from "@material-ui/core";

const styles = {
    App: {
        height: '100%'
    }
};


class App extends Component {
  render() {
      const { classes } = this.props;

      return (
      <div className={classes.App}>
          <MuiThemeProvider theme={ customPalette }>
            <Appbar/>

              <Router history={customHistory}>
                  <Switch>
                      <Route path='/accueil' component={Home}/>
                      <Route path='/help' component={Help}/>
                      <Route path='/politique' component={PolicyDialog}/>
                      <Route path='*' render={() => <Redirect to="/politique" />}/>
                  </Switch>
              </Router>
              <Bottombar/>
          </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
