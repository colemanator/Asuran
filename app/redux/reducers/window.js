/**
 * Created by Peter on 3/10/16.
 */
'use strict';

import {Record} from 'immutable'

const initial = {
    active: false,
    title: '',
    content: {},
    button: ''
};

export default function window(state = initial, action){
    switch (action.type){
        case 'SET_WINDOW':
            return action.window;
        default:
            return state;
    }
}