/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

import {List, Map} from 'immutable';

const initial = List([Map({id: 'empty'})]);

export default function sections (state = initial, action){
    switch (action.type){
        case 'SET_SECTION':
            return state.set(action.index,Map({...action.section}));
        case 'UPDATE_SECTION':
            return state.update(action.index,(section) => {
                return section.set(action.key, action.value);
            });
        case 'DELETE_SECTION':
            return state.delete(action.index);
        case 'ADD_SECTION':
            return state.push(Map({id: 'empty'}));
        case 'SHIFT_SECTION':
            let tempSection = state.get(action.index);
            return state.delete(action.index).insert(action.newIndex,tempSection);
        default:
            return state;
    }
}