/**
 * Created by Peter on 28/07/2016.
 * This file will be for the sections model which will contain an object of functions which
 * will eventually be linked to the sections object to be imported
 */
'use strict';

var Sections = {
    create(){
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

    set(index, id){
        
    },

    move(oldIndex, newIndex){
        if (oldIndex >= 0 && oldIndex < this.sections.length && newIndex >= 0 && newIndex < this.sections.length) {
            this.sections.splice(newIndex, 0, this.sections.splice(oldIndex, 1)[0]);
            return true;
        } else {
            return false;
        }
    },

    /**
     * Array of sections with their defaults values :todo populate
     */
    defaults:{
        
    }
    
};

export {Sections};