/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

export default function setSiteURL(state = 'http://felix.e1.siteloft.com', action) {
    switch (action.type){
        case 'SET_SITE_URL':
            return action.url;
        default:
            return state;
    }
}