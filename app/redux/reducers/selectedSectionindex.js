/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

export default function selectedSectionIndex (state = 0, action){
    switch (action.type){
        case 'SET_SELECTED_SECTION':
            return action.index;
        case 'DELETE_SECTION':
            return action.index - 1;
        case 'SHIFT_SECTION':
            return action.newIndex;
        default:
            return state;
    }
}


