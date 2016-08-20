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
     * This function will catch syntax errors from parsing JSON String
     * @param JSONString {string} JSON string to be imported
     * @returns {object} true if successful false if otherwise
     */
    import(JSONString){
        try{
            //create backup of current object in case parse fails
            var backup = this.export();

            //parse
            this.version = JSON.parse(JSONString).version;
            this.sections = JSON.parse(JSONString).sections;

            //Check to see if the object contains correct values
            if(Array.isArray(this.sections) && !isNaN(this.version)) {
                if(this.sections.length > 0) {
                    return true;
                } else {
                    this.version = JSON.parse(backup).version;
                    this.sections = JSON.parse(backup).sections;
                    return {success: false, error: 'JSON was parsed correctly but values provided where not correct for this App'};
                }
            }
        //Catch any syntax errors thrown by JSON.parse
        } catch (error){
            this.version = JSON.parse(backup).version;
            this.sections = JSON.parse(backup).sections;
            return {success: false, error: 'JSON String provided not valid, please ensure valid JSON string is provided'};
        }

        return {success: true};

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

    //:todo eventually it might be worth creating a saving system using localStorage

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
            case 'button-link':
                this.sections[index] = {
                    id: "button-link",
                    size: "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3",
                    bgImageUrl: "/wp-content/uploads/2015/01/8009906473_81da7b8652_o-e1420495660219.jpg",
                    caption: "Looking For a Property To Rent",
                    href: "/listings/",
                    buttonText: "Recent listings",
                    transparency: '0.5'
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