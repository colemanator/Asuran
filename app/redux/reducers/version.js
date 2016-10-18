/**
 * Created by Peter on 13/10/16.
 */
'use strict';

export default function version(state = 0, action){
    switch (action.type){
        case "IMPORT_SECTIONS":
            return action.version;
        default:
            return state;
    }
}