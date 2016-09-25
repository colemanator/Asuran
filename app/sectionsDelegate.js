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

        //create backup of current object in case parse fails
        var backup = JSON.stringify(this);

        try{
            //parse
            this.version = JSON.parse(JSONString).version;
            this.sections = JSON.parse(JSONString).sections;
        //Catch any syntax errors thrown by JSON.parse
        } catch (error){
            this.version = JSON.parse(backup).version;
            this.sections = JSON.parse(backup).sections;
            return {success: false, error: 'JSON String provided not valid, please ensure valid JSON string is provided'};
        }

        //Check to see if the object contains correct values
        if(Array.isArray(this.sections) && !isNaN(this.version)) {
            if(this.sections.length > 0) {
                debugger;
                this.processSections();
                return {success: true};
            } else {
                this.version = JSON.parse(backup).version;
                this.sections = JSON.parse(backup).sections;
                return {success: false, error: 'JSON was parsed correctly but values provided where not correct for this App'};
            }
        }

    },

    /**
     * Exports delegates this object as JSON
     */
    export(){

        //create Object to be created and exported as JSON
        var exportObject = {
            version: this.version,
            sections: [

            ]
        };

        var exportIndex = 0;

        //Copy this.sections where property is valid
        for(let i = 0; i < this.sections.length; i++){
            //if section is of type empty don't copy
            if(this.sections[i].id != 'empty') {
                exportObject.sections[exportIndex] =  {};
                for(let key in this.sections[i]){
                    //if property does not have an empty value copy it to export object
                    if (this.sections[i][key] != '' && this.sections[i][key]) {
                        exportObject.sections[exportIndex][key] = this.sections[i][key];
                    }
                }
                exportIndex++;
            }
        }

        //return the newly created Object
        return JSON.stringify(exportObject);
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
     * this function validates the state each section against the defaults
     */
    processSections(){

        for (let i = 0; i < this.sections.length; i++){

            //does the imported section have an id
            if(this.sections[i].hasOwnProperty('id')){
                let defaultObject = this.getDefault(this.sections[i].id);

                //check if default object found
                if(defaultObject != false) {
                    //check for missing properies and add them with empty string as value
                    for (let property in defaultObject) {
                        if (!this.sections[i].hasOwnProperty(property)) {
                            this.sections[i][property] = '';
                        }
                    }
                    //check for extra properties and remove them if they are not in defaults
                    for (let property in this.sections[i]) {
                        if (!defaultObject.hasOwnProperty(property)) {
                            delete this.sections[i][property];
                        }
                    }
                } else {
                    //No id found delete
                    this.delete(topIndex);
                }
            } else {
                //no Matching Object found delete
                this.delete(topIndex);
            }
        }
    },

    /**
     * This function will set the section at the index provided with the default values for the section ID provided.
     * @param index
     * @param id
     * @returns {boolean}
     */
    set(index,id){
        if (this.getDefault(id)) {
            this.sections[index] = this.getDefault(id);
            return true;
        } else {
            return false;
        }
    },

    /**
     * This function will get the Default values of the section for the id provided.
     * This was easier than trying to copy a 'defaultSections' object
     * @param id
     * @returns {object||boolean}
     */
    getDefault(id){
        //this will be verbose but easier to understand and quicker than copying values from a default object
        switch(id){
            case 'agency-details':
                return {
                        id: 'agency-details',
                        size: 'col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3',
                        colour: ' brand-bg brand-style-fg'
                    };
            case 'empty':
                return {
                        id: 'empty'
                    };
            case 'button-link':
                return {
                    id: "button-link",
                    size: "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3",
                    bgImageUrl: "/wp-content/uploads/2015/01/8009906473_81da7b8652_o-e1420495660219.jpg",
                    caption: "Looking For a Property To Rent",
                    target: '_blank',
                    href: "/listings/",
                    buttonText: "Recent listings",
                    transparency: '0.5'
                };
            case 'image':
                return {
                    id: "image",
                    size: "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3",
                    bgImageUrl: "http://lorempixel.com/500/500/city/2/"
                };
            case 'image-text':
                return {
                    id: "image-text",
                    size: "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3",
                    caption: "The greatest real estate on earth #bombdiggity",
                    transparency: "0.6",
                    bgImageUrl: "http://lorempixel.com/500/500/city/2/"
                };
            case 'link-list':
                return {
                    id: "link-list",
                    size: "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3",
                    colors: "brand-bg brand-style-fg",
                    "link_color": "black",
                    "heighlight-color": "",
                    title: "SiteLoft",
                    list: [
                        {
                            text: "Contact us",
                            href: "/offcanvas_form/?location=agency_contact"
                        },
                        {
                            text: "Application form",
                            href:"/offcanvas_form/?location=sales_appraisal"
                        },
                        {
                            text: "Open to inspect",
                            href: "/openhomes/?type=ofi"
                        },
                        {
                            text: "Request a rental appraisal",
                            href: "/offcanvas_form/?location=rental_appraisal"
                        },
                        {
                            text: "About us",
                            href: "/agency/loft-realty"
                        }
                    ]
                };
                break;
            case 'agency-map':
                return {
                    id: "agency-map",
                    size: "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3",
                    noDefault: ""
                };
            default:
                return false;
        }
    },
    
};

export {Sections};