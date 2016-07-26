/**
 * Created by Peter on 15/07/2016.
 */
'use strict';

require('/Users/Peter/PhpstormProjects/Asuran/client/less/main.less');

import React from 'react';
import {render} from 'react-dom';
import {Grid} from '../app/Grid.jsx'

var testObject = [
    {
        id: 'agency-details',
        size: 'col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3',
        colour: ' brand-bg brand-style-fg'
    }

];

render(React.createElement(Grid,{sectionsObject: testObject, selectedObjectKey: 0}),document.getElementById('app'));