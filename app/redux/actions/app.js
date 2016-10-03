/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

export const SET_SITE_URL = 'SET_SITE_URL';
export const SET_WINDOW = 'SET_WINDOW';

export function setSiteURL(url){
    return {type: SET_SITE_URL, url}
}

export function setWindow(window){
    return {type: SET_WINDOW, window}
}