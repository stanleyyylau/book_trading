import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, IndexRoute, Route, browserHistory, hashHistory } from "react-router";

import "./css/reset.css"
import "./css/global.css"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import LoginContainer from './container/LoginContainer'
import RegisterContainer from './container/RegisterContainer'
import AllBooksContainer from './container/AllBooksContainer'
import MainContainer from './container/MainContainer'
import addBookContainer from './container/AddBookContainer'
import BookDetailContainer from './container/BookDetailContainer'
import myBooksContainer from './container/myBooksContainer'
import profileContainer from './container/profileContainer'


injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={ hashHistory }>
            <Route path='/' component={ MainContainer }>
                <IndexRoute component={ AllBooksContainer } />
                <Route path="register" component={ RegisterContainer } />
                <Route path="addbook" component={ addBookContainer } />
                <Route path="login" component={ LoginContainer } /> 
                <Route path="book/:id" component={ BookDetailContainer } /> 
                <Route path="mybooks" component={ myBooksContainer } />   
                <Route path="profile" component={ profileContainer } />               
            </Route>
        </Router>
    </MuiThemeProvider>
    , document.getElementById("root"));