/**
 * Created by Peter on 25/07/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

var Editor = React.createClass({

    propTypes:{
        selectedObjectKey: React.PropTypes.number,
        sectionsObject: React.PropTypes.array,
        onEdit: React.PropTypes.func
    },

    render(){
        return (
            <div className='menu-wrapper'>
                <h2>Editor</h2>
                {this.renderOptions()}
            </div>
        );

    },

    renderOptions(){

        var editorContentArray = [];
        var key = 0;

        var selectedObject =  this.props.sectionsObject[this.props.selectedObjectKey];

        for(var propertyName in selectedObject){

            if(propertyName == 'id'){
                editorContentArray.push(
                    <h3 key={key}>{selectedObject[propertyName]}</h3>
                );
            } else {

                editorContentArray.push(
                    <input type="text" key={key} defaultValue={selectedObject[propertyName]} name={propertyName} onChange={this.handleChange}/>
                );
            }

            key++
        }

        return editorContentArray;
    },

    handleChange(event){
        this.props.onEdit(this.props.selectedObjectKey, event)
    }


});



export {Editor}

