/**
 * Created by Peter on 28/07/2016.
 * This file will be for the sections model which will contain an object of functions which
 * will eventually be linked to the sections object to be imported
 */
'use strict';

var Sections = {

    /**
     * Initialises this object with default values
     * @returns {boolean} true if successful false if otherwise
     */
    init(){
        if(!this.hasOwnProperty('sections')){
            this.version = 0.1;
            this.sections = [
                {
                    id: 'empty'
                }
            ];

            return true;
        } else {
            return false
        }
    },


    /**
     * Takes a jsonString and validates it before assigning it to the delegates this objects section and version.
     * This function will catch syntax errors from parsing JSON String :todo create error message for user
     * @param JSONstring {string} JSON string to be imported
     * @returns {boolean} true if successful false if otherwise
     */
    import(JSONstring){
        try{
            this.version = JSON.parse(JSONstring).version;
            this.sections = JSON.parse(JSONstring).sections;
            if(Array.isArray(this.sections) && Number.isInteger(this.version)) {
                if(this.sections.length > 0) {
                    return true;
                } else {
                    this.init();
                    console.log('JSON was parsed correctly but values provided where not correct for this App');
                    return false;
                }
            }
        } catch (error){
            console.error('JSON String provided not valid, please ensure valid JSON string is provided. Using Defaults.', error);
            this.init();
            return false;
        }

    },

    /**
     * Exports delegates this object as JSON
     */
    export(){
        return JSON.stringify(this);
    },

    /**
     * Adds new empty section to this.sections
     * @param id The ID of the section to be created, currently not used.
     * @returns {number} returns the index of the new section in the this.sections Array
     */
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


    /**
     * Deletes the section at the specified index
     * @param index The Index of the section to be Deleted
     */
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

    /**
     * This function will set the section at the index provided with the default values for the section ID provided.
     * @param index
     * @param id
     * @returns {boolean}
     */
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