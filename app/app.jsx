import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
//Components
import Main from './components/Main';
import Start from './components/Start';
import Articles from './components/Articles';
import Authors from './components/Authors';
import Categories from './components/Categories';
import Images from './components/Images';

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// CSS for the app
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Start}/>
            <Route path="articles" component={Articles}/>
            <Route path="authors" component={Authors}/>
            <Route path="categories" component={Categories}/>
            <Route path="images" component={Images}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
