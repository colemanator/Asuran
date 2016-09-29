/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

import {Map, List} from 'immutable';

const initial = List([Map({id: 'empty'})]);

export default function sections (state = initial, action){
    switch (action.type){
        case 'ADD_SECTION':
            return state.push(Map({...action.section}));
        case 'UPDATE_SECTION':
            return state.update(action.id,state.get(action.id).update(action.key,action.value));
        case 'DELETE_SECTION':
            return state.delete(action.id);
        default:
            return state;
    }
}