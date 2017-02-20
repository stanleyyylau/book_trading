import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, IndexRoute, Route, browserHistory, hashHistory } from "react-router";

import "./css/reset.css"
import "./css/global.css"

import Main from './component/Main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import LoginContainer from './container/LoginContainer'
import RegisterContainer from './container/RegisterContainer'
import AllBooksContainer from './container/AllBooksContainer'


injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={ hashHistory }>
            <Route path='/' component={ Main }>
                <IndexRoute component={ AllBooksContainer } />
                <Route path="register" component={ RegisterContainer } />
                <Route path="login" component={ LoginContainer } />               
            </Route>
        </Router>
    </MuiThemeProvider>
    , document.getElementById("root"));