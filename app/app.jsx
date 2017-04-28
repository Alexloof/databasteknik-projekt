var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//Components
var Main = require('Main');

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// CSS for the app
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>,
    document.getElementById('app')
);
