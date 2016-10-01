/**
 * Created by Peter on 15/07/2016.
 */
'use strict';

require('../assets/less/main.less');

import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx'
import {Sections} from '../app/sectionsDelegate';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './redux/rootReducer'

/**
 * Hide the loader, called on App's componentDidMount call
 */
function hideLoader(){
    document.getElementById('loading-overlay').style.display = 'none';
}

//create sectionsObject and link it to it's deligate
var sectionsObject = Object.create(Sections);

//initialise with defaults
sectionsObject.init();

const store = createStore(reducers,window.devToolsExtension && window.devToolsExtension());

//Render out app
render(
    <App
        sectionsObject={sectionsObject}
        siteURL="http://felix.e1.siteloft.com"
        onLoad={hideLoader}
    />
,document.getElementById('app'));