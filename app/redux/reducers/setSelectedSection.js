/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

import {List, Map} from 'immutable';

export default function setSelectedSection (state = 0, action){
    switch (action.type){
        case 'SET_SLECTED_SECTION':
            return action.id;
        default:
            return state;
    }
}


