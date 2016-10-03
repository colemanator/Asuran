/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

import { combineReducers } from 'redux'

//reducers
import defaultSections from './reducers/defaultSections';
import SiteURL from './reducers/SiteURL';
import SelectedSection from './reducers/SelectedSection';
import sections from './reducers/sections';
import window from './reducers/window'

const reducers = combineReducers({
    defaultSections,
    SiteURL,
    SelectedSection,
    sections,
    window
});

export default reducers;