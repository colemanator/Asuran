/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

export default function selectedSection (state = 0, action){
    switch (action.type){
        case 'SET_SLECTED_SECTION':
            return action.index;
        default:
            return state;
    }
}


