/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

export const SET_SITE_URL = 'SET_SITE_URL';
export const SET_WINDOW = 'SET_WINDOW';
export const TOGGLE_WINDOW_ACTIVE = 'TOGGLE_WINDOW_ACTIVE';

export function setSiteURL(url){
    return {type: SET_SITE_URL, url}
}

export function setWindow(window){
    return {type: SET_WINDOW, window}
}

export function setExportWindow(){
    return {type: SET_WINDOW, window: {
            type: 'export',
            active: true,
            title: '',
            content: '',
    }}
}

export function setImportWindow(){
    return {type: SET_WINDOW, window: {
            type: 'import',
            active: true,
            title: '',
            content: '',
    }}
}

export function toggleWindowActive() {
    return {type: TOGGLE_WINDOW_ACTIVE}
}