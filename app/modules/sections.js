/**
 * Created by Peter on 13/10/16.
 */
'use strict';

/**
 * Tries to convert JSON string into sections
 * @param JSONString {string}
 * @param defaults {object} Map
 * @returns {object}
 */
export function importSections(JSONString,defaults){

    try{
        var sections = JSON.parse(JSONString).sections;
        var version = JSON.parse(JSONString).version || 0;

    //Catch any syntax errors thrown by JSON.parse
    } catch (error){
        return {
            success: false,
            error: 'JSON String provided not valid, please ensure valid JSON string is provided',
            data: {
                sections: [],
                version: 0
            }
        };
    }

    //Check to see if the object contains correct values
    if(sections.constructor == Array && !isNaN(version)) {
        if(sections.length > 0) {
            //process sections
            return {
                success: true,
                error: null,
                data: {
                    sections: processSections(sections,defaults),
                    version: version
                }
            };
        }
    }

    return {
        success: false,
        error: 'JSON was parsed correctly but values provided where not correct for this App',
        data: {
            sections: [],
            version: 0
        }
    };
}


/**
 * exports the sections as JSON, removes any empty or invalid values
 * @param sections {object}
 * @param version {number}
 */
export function exportSections(sections,version){

    //remove any sections with ID empty
    var filteredSections = sections.filter((section) => {
        if(section.id != 'empty'){
            return section
        }
    });

    //remove any fields off sections with '' value
    var processedSections = filteredSections.map((section) => {
        for(let key in section){
            if (section.hasOwnProperty(key) && section[key] == '') {
                delete section[key];
            }
        }
        return section;
    });

    //return correct JSON String
    return JSON.stringify({sections: processedSections, version: version});

}


/**
 * Checks imported sections are valid by comparing them against the defaults, attempts to correct any errors
 * @param sections {object}
 * @param defaults {object}
 * @returns {object}
 */
export function processSections(sections, defaults){
    return sections.map((section) => {

        //remove any extra properties
        for (let key in section){
            if(section.hasOwnProperty(key) && !defaults.has(key)){
                delete sections[key];
            }
        }

        //add any missing properties
        Array.from(defaults.keys()).map((key) => {
            if(!section.hasOwnProperty(key)){
                section[key] = defaults[key];
            }
        });

        return section;
    });
}