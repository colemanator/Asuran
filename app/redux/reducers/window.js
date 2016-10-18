/**
 * Created by Peter on 3/10/16.
 */
'use strict';

import {Map} from 'immutable';

const initial = Map({
    type: '',
    active: false,
    title: '',
    content: '',
    error: ''
});

export default function window(state = initial, action){
    switch (action.type){
        case 'SET_WINDOW':
            return Map(action.window);
        case 'TOGGLE_WINDOW_ACTIVE':
            return state.set('active',!state.get('active'));
        case 'IMPORT_SECTIONS':
            return state.set('active',!state.get('active'));
        default:
            return state;
    }
}