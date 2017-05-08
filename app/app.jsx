import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

//Components
import Main from './components/Main';
import Start from './components/Start';
import Articles from './containers/Articles';
import Authors from './containers/Authors';
import Categories from './containers/Categories';
import Images from './containers/Images';
import Read from './containers/Read';

// Load Materialize-CSS
require("materialize-loader");
require('materialize-css/dist/js/materialize.min.js');
// CSS for the app
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Start}/>
            <Route path="read/:id" component={Read}/>
            <Route path="articles" component={Articles}/>
            <Route path="authors" component={Authors}/>
            <Route path="categories" component={Categories}/>
            <Route path="images" component={Images}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
