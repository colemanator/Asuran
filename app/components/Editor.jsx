/**
 * Created by Peter on 25/07/2016.
 */
'use strict';

import React from 'react';
import SectionSelect from './editorOptions/SectionSelect.jsx'
import ListOption from './editorOptions/ListOption.jsx'

export default class Editor extends React.Component {

    static propTypes = {
        selectedSectionIndex: React.PropTypes.number,
        sections: React.PropTypes.array,
        defaultSections: React.PropTypes.object,

        //functions
        onEdit: React.PropTypes.func,
        onShiftSectionClick: React.PropTypes.func,
        onEditorAddClick: React.PropTypes.func,
        onEditorSelectChange: React.PropTypes.func,
        onEditorDeleteClick: React.PropTypes.func,
        onSetSelectedSectionIndex: React.PropTypes.func,

        onListInnerListInputChange: React.PropTypes.func,
        onListRemoveListClick: React.PropTypes.func,
        onListAddListClick: React.PropTypes.func
    };

    handleChange = (event) => {
        this.props.onEdit(this.props.selectedSectionIndex, event.target.name, event.target.value)
    };

    handlePositionClick = (event,right) => {
        var index = this.props.selectedSectionIndex;
        var newIndex;
        if(!right && this.props.selectedSectionIndex > 0){
            newIndex = this.props.selectedSectionIndex - 1;
        } else if(right) {
            newIndex = this.props.selectedSectionIndex + 1;
        }

        this.props.onShiftSectionClick(index, newIndex);
    };

    handleAddClick = () => {
        this.props.onEditorAddClick();
    };

    handleDeleteClick = () => {
        if(this.props.selectedSectionIndex > 0) {
            this.props.onEditorDeleteClick(this.props.selectedSectionIndex);
        }
    };

    /**
     * for each property on the selected section create a label and input
     * @returns {Array}
     */
    renderOptions = () => {

        var editorContentArray = [];
        var key = 0;

        var selectedObject =  this.props.sections[this.props.selectedSectionIndex];

        for(let propertyName in selectedObject) {

            if (propertyName == 'id') {
                editorContentArray.push(
                    <h3 className="section-type-title" key={key}>{selectedObject[propertyName]}</h3>
                );
            } else if (propertyName == 'list'){
                editorContentArray.push(
                    <div key={key}>
                        <h4>{propertyName}</h4>
                        <ListOption
                            selectedSectionIndex={this.props.selectedSectionIndex}
                            sectionOptionList={selectedObject[propertyName]}
                            onAddListClick={this.props.onListAddListClick}
                            onRemoveListClick={this.props.onListRemoveListClick}
                            onInnerListInputChange={this.props.onListInnerListInputChange}
                        />
                    </div>
                );
            }else {
                editorContentArray.push(
                    <div key={key}>
                        <h4>{propertyName}</h4>
                        <input type="text" value={selectedObject[propertyName]} name={propertyName} onChange={this.handleChange}/>
                    </div>
                );
            }

            key++
        }

        return editorContentArray;
    };

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
                <SectionSelect sections={this.props.sections}
                               selectedSectionIndex={this.props.selectedSectionIndex}
                               onEditorSelectChange={this.props.onEditorSelectChange}
                               defaultSections={this.props.defaultSections}
                />
                <div className="section-settings">
                    {this.renderOptions()}
                </div>
            </div>
        );

    }
}

