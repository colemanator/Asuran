/**
 * Created by Peter on 15/07/2016.
 */
'use strict';

require('/Users/Peter/PhpstormProjects/Asuran/client/less/main.less');

import React from 'react';
import {render} from 'react-dom';
import {agencyDetailsSection} from '../app/sections.jsx'

render(React.createElement(agencyDetailsSection,{size:'md-12',colour:' brand-style-fg'}),document.getElementById('app'));