/**
 * Created by Peter on 15/07/2016.
 */
'use strict';

require('/Users/Peter/PhpstormProjects/Asuran/client/less/main.less');

import React from 'react';
import {render} from 'react-dom';
import {Grid} from '../app/Grid.jsx'
import {Sections} from '../app/sectionsModel';

var testObject = [
    {
        id: 'agency-details',
        size: 'col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3',
        colour: ' brand-bg brand-style-fg'
    },
    {
        id: 'agency-details',
        size: 'col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3',
        colour: ' brand-bg brand-style-fg'
    }

];

//:todo find less hacky way of creating the object link.. maybe
testObject.__proto__ = Sections;

render(React.createElement(Grid,{sectionsObject: testObject, selectedObjectKey: 0}),document.getElementById('app'));