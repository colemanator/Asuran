/**
 * Created by Peter on 28/07/2016.
 * This file will be for the sections model which will contain an object of functions which
 * will eventually be linked to the sections object to be imported
 */
'use strict';

var Sections = {
    create(jsonString){
        if(!this.hasOwnProperty('sections')){
            this.sections = [
                {
                    id: 'empty'
                }
            ];
        }
    },

    import(){

    },

    export(){

    },

    add(){
        //todo: Change to add empty Section
        this.sections.push(
            {
                id: 'agency-details',
                size: 'col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3',
                colour: ' brand-bg brand-style-fg'
            }
        );
    },

    delete(){

    },

    change(){

    },

    move(oldIndex, newIndex){
        if (oldIndex >= 0 && oldIndex < this.sections.length && newIndex >= 0 && newIndex < this.sections.length) {
            this.sections.splice(newIndex, 0, this.sections.splice(oldIndex, 1)[0]);
            return true;
        } else {
            return false;
        }
    }
};

export {Sections};