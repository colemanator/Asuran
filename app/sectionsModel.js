/**
 * Created by Peter on 28/07/2016.
 * This file will be for the sections model which will contain an object of functions which
 * will eventually be linked to the sections object to be imported
 */
'use strict';

var Sections = {
    create(jsonString){
        if(!this.hasOwnProperty('sections')){
            this.sections = {
                id: 'empty'
            };
        }
    },

    import(){

    },

    export(){

    },

    add(){

    },

    delete(){

    },

    move(oldIndex, newIndex){
        if (oldIndex < this.length || newIndex < this.length) {
            this.splice(newIndex, 0, this.splice(oldIndex, 1)[0]);
        }
    }
};

export {Sections};