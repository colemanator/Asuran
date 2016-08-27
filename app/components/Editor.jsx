/**
 * Created by Peter on 25/07/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';
import {SectionSelect} from './editorOptions/SectionSelect.js'

var Editor = React.createClass({

    propTypes:{
        selectedObjectKey: React.PropTypes.number,
        sectionsObject: React.PropTypes.array,

        //functions
        onEdit: React.PropTypes.func,
        onEditorPositionClick: React.PropTypes.func,
        onEditorAddClick: React.PropTypes.func,
        onEditorSelectChange: React.PropTypes.func,
        onEditorDeleteClick: React.PropTypes.func
    },

    handleChange(event){
        this.props.onEdit(this.props.selectedObjectKey, event)
    },

    handlePositionClick(event,right){
        if(right){
            this.props.onEditorPositionClick(this.props.selectedObjectKey, this.props.selectedObjectKey+1);
        } else {
            this.props.onEditorPositionClick(this.props.selectedObjectKey, this.props.selectedObjectKey-1);
        }

    },

    handleAddClick(){
        this.props.onEditorAddClick();
    },

    handleDeleteClick(){
        this.props.onEditorDeleteClick(this.props.selectedObjectKey);
    },

    /**
     * for each property on the selected section create a label and input
     * @returns {Array}
     */
    renderOptions(){

        var editorContentArray = [];
        var key = 0;

        var selectedObject =  this.props.sectionsObject[this.props.selectedObjectKey];

        for(let propertyName in selectedObject){

            if(propertyName == 'id'){
                editorContentArray.push(
                    <h3 className="section-type-title" key={key}>{selectedObject[propertyName]}</h3>
                );
            } else {

                editorContentArray.push(
                    <div key={key}>
                        <h4>{propertyName}</h4>
                        <input type="text" defaultValue={selectedObject[propertyName]} name={propertyName} onChange={this.handleChange}/>
                    </div>
                );
            }

            key++
        }

        return editorContentArray;
    },

    /**
     * render out the editor menu with all options and buttons
     * @returns {XML}
     */
    render(){

        return (
            <div className='menu-wrapper'>
                <h2 id="editor-title">Editor</h2>
                <div className="editor-section">
                    <h3>Shift Position</h3>
                    <div className="button left" onClick={this.handlePositionClick}>Left</div>
                    <div className="button right"onClick={this.handlePositionClick.bind(this, true)}>Right</div>
                </div>
                <div className="editor-section">
                    <h3>Add New</h3>
                    <div className="button left" onClick={this.handleAddClick}>Add</div>
                </div>
                <div className="editor-section">
                    <h3>Delete</h3>
                    <div className="button left" onClick={this.handleDeleteClick}>Delete</div>
                </div>
                <SectionSelect sectionsObject={this.props.sectionsObject}
                               selectedObjectKey={this.props.selectedObjectKey}
                               onEditorSelectChange={this.props.onEditorSelectChange}
                />
                <div className="section-settings">
                    {this.renderOptions()}
                </div>
            </div>
        );

    },


});

export {Editor}

