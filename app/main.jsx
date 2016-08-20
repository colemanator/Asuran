/**
 * Created by Peter on 15/07/2016.
 */
'use strict';

require('../assets/less/main.less');

import React from 'react';
import {render} from 'react-dom';
import {App} from '../app/App.jsx'
import {Sections} from '../app/sectionsDelegate';

//create sectionsObject and link it to it's deligate
var sectionsObject = Object.create(Sections);

//initialise with defaults
sectionsObject.init();

//Render out app
render(React.createElement(App,{sectionsObject, siteURL: 'http://felix.e1.siteloft.com'}),document.getElementById('app'));