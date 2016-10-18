/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

export const SET_SELECTED_SECTION = 'SET_SELECTED_SECTION';

export const SET_SECTION = 'SET_SECTION';
export const UPDATE_SECTION = 'UPDATE_SECTION';
export const DELETE_SECTION = 'DELETE_SECTION';
export const ADD_SECTION = 'ADD_SECTION';
export const SHIFT_SECTION = 'SHIFT_SECTION';
export const IMPORT_SECTIONS = 'IMPORT_SECTIONS';

export const SECTION_LIST_UPDATE = 'SECTION_LIST_UPDATE';
export const SECTION_LIST_ADD = 'SECTION_LIST_ADD';
export const SECTION_LIST_DELETE = 'SECTION_LIST_DELETE';


export function setSelectedSectionIndex(index){
    return {type: SET_SELECTED_SECTION, index}
}

export function setSection(index, section) {
    return {type: SET_SECTION, index, section}
}

export function updateSection(index, key, value) {
    return {type: UPDATE_SECTION, index, key, value}
}

export function deleteSection(index){
    return {type: DELETE_SECTION, index}
}

export function addSection() {
    return {type: ADD_SECTION}
}

export function shitSection(index, newIndex) {
    return {type: SHIFT_SECTION, index, newIndex}
}

export function importSections(sections, version) {
    return {type: IMPORT_SECTIONS, sections, version}
}

export function sectionListUpdate(index, key, itemIndex, itemKey, itemValue) {
    return {type: SECTION_LIST_UPDATE, index, key, itemIndex, itemKey, itemValue}
}

export function sectionListAdd(index, key) {
    return {type: SECTION_LIST_ADD, index, key}
}

export function sectionListDelete(index, key, itemIndex) {
    return {type: SECTION_LIST_DELETE, index, key, itemIndex}
}