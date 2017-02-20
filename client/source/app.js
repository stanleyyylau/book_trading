import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, IndexRoute, Route, browserHistory, hashHistory } from "react-router";

import App from './component/app'

ReactDOM.render(
    <Router history={ hashHistory }>
        <Route path="/" component={ App } >
        </Route>
        <Route path="*" component={ App } />
    </Router>
    , document.getElementById("root"));