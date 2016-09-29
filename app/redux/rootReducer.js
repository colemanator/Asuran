/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

import { combineReducers } from 'redux'

//reducers
import defaultSections from './reducers/defaultSections';
import setSiteURL from './reducers/setSiteURL';
import setSelectedSection from './reducers/setSelectedSection';
import sections from './reducers/sections';

const reducers = combineReducers({
    defaultSections,
    setSiteURL,
    setSelectedSection,
    sections
});

export default reducers;