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
        case 'IMPORT_SECTIONS':
            return List(action.sections.map((section) => {return Map(section)}));
        case 'SECTION_LIST_UPDATE':
            return state.update(action.index,(section) => {
                return section.set(action.key, section.get(action.key).update(action.itemIndex,(listItem) => {
                    return listItem.set(action.itemKey,action.itemValue)
                }));
            });
        case 'SECTION_LIST_ADD':
            return state.update(action.index,(section) => {
                return section.set(action.key,section.get(action.key).push(Map({text: '', href: ''})));
            });
        case 'SECTION_LIST_DELETE':
            return state.update(action.index,(section) => {
                return section.set(action.key,section.get(action.key).delete(action.itemIndex));
            });
        default:
            return state;
    }
}