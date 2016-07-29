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
        onEdit: React.PropTypes.func,
        onEditorPositionClick: React.PropTypes.func
    },

    render(){
        return (
            <div className='menu-wrapper'>
                <h2 id="editor-title">Editor</h2>
                <div className="section-settings">
                    {this.renderOptions()}
                </div>
                <div className="section-position">
                    <div className="button left" onClick={this.handlePositionClick}>Left</div>
                    <div className="button right"onClick={this.handlePositionClick}>Right</div>
                </div>

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
                    <h3 className="section-type-title" key={key}>{selectedObject[propertyName]}</h3>
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
    },

    handlePositionClick(event){
        if(event.target.className == 'right'){
            this.props.onEditorPositionClick(this.props.selectedObjectKey, this.props.selectedObjectKey+1);
        } else {
            this.props.onEditorPositionClick(this.props.selectedObjectKey, this.props.selectedObjectKey-1);
        }

    }


});



export {Editor}

