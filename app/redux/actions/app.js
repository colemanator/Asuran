/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

export const SET_SITE_URL = 'SET_SITE_URL'

export function setSiteURL(URL){
    return {type: SET_SITE_URL, URL}
}