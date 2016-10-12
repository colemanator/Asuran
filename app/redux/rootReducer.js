/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

import { combineReducers } from 'redux'

//reducers
import defaultSections from './reducers/defaultSections';
import siteURL from './reducers/SiteURL';
import selectedSectionIndex from './reducers/SelectedSectionIndex';
import sections from './reducers/sections';
import window from './reducers/window'

const reducers = combineReducers({
    defaultSections,
    siteURL,
    selectedSectionIndex,
    sections,
    window
});

export default reducers;