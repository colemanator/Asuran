/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

export const SET_SECTION_PROPERTY = 'SET_SECTION_PROPERTY';
export const SET_SELECTED_SECTION = 'SET_SELECTED_SECTION';


export function setSectionProptery(key,value){
    return {type: SET_SECTION_PROPERTY, key, value}
}

export function setSelectedSection(id){
    return {type: SET_SELECTED_SECTION, id}
}