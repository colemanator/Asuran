/**
 * Created by Peter on 15/07/2016.
 */
'use strict';

require('/Users/Peter/PhpstormProjects/Asuran/client/less/main.less');

import React from 'react';
import {render} from 'react-dom';
import {App} from '../app/App.jsx'
import {Sections} from '../app/sectionsDelegate';

var windowState = {
    display: "active",
    contentType: "import",
    content: "hello world",
    title: "Export"
};

var testObject = Object.create(Sections);

testObject.init();

render(React.createElement(App,{sectionsObject: testObject, selectedObjectKey: 0, siteURL: 'http://felix.e1.siteloft.com'}),document.getElementById('app'));