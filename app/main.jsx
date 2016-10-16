/**
 * Created by Peter on 15/07/2016.
 */
'use strict';

require('../assets/less/main.less');

import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './redux/rootReducer'

/**
 * Hide the loader, called on App's componentDidMount call
 */
function hideLoader(){
    document.getElementById('loading-overlay').style.display = 'none';
}

const store = createStore(reducers,window.devToolsExtension && window.devToolsExtension());

//Render out app
render(
    <Provider store={store}>
        <App onLoad={hideLoader}/>
    </Provider>
,document.getElementById('root'));