/**
 * Created by Peter on 28/07/2016.
 * This file will be for the sections model which will contain an object of functions which
 * will eventually be linked to the sections object to be imported
 */
'use strict';

var Sections = {
    init(){
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

    add(id){
        switch(id){
            case undefined:
                this.sections.push(
                    {
                        id: 'empty'
                    }
                );
                return (this.sections.length - 1);
        }
    },


    delete(index){
        this.sections.splice(index, 1);
    },

    move(oldIndex, newIndex){
        if (oldIndex >= 0 && oldIndex < this.sections.length && newIndex >= 0 && newIndex < this.sections.length) {
            this.sections.splice(newIndex, 0, this.sections.splice(oldIndex, 1)[0]);
            return true;
        } else {
            return false;
        }
    },

    set(index, id){
        //this will be verbose but easier to understand and quicker than copying values from a default object
        switch(id){
            case 'agency-details':
                this.sections[index] = {
                        id: 'agency-details',
                        size: 'col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3',
                        colour: ' brand-bg brand-style-fg'
                    };
                break;
            case 'empty':
                this.sections[index] = {
                        id: 'empty'
                    };
                break;
            default:
                return false;
        }
        //return true on success
        return true;
    }
    
};

export {Sections};