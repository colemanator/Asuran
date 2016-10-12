/**
 * Created by Peter on 22/08/2016.
 */
'use strict';

import React from 'react';

export default class SectionSelect extends React.Component {

    static PropTypes = {
        sections: React.PropTypes.object,
        selectedSectionIndex: React.PropTypes.number,
        onEditorSelectChange: React.PropTypes.func,
        defaultSections: React.PropTypes.object
    };

    handleSelectChange = (event) => {
        this.props.onEditorSelectChange(this.props.selectedSectionIndex,this.props.defaultSections.get(event.target.value));
    };

    testClick = () => {
        console.log(this.props.defaultSections)
    };
    /**
     * render out the select input
     * @returns {XML}
     */
    render() {
        return (
            <div className="editor-section select">
                <h3 onClick={this.testClick}>Change Section Type</h3>
                <select className="section-select" onChange={this.handleSelectChange}
                        value={this.props.sections[this.props.selectedSectionIndex].id}>
                    <option value="agency-details">Agency Details</option>
                    <option value="button-link">Agency Button Link</option>
                    <option value="image">Image</option>
                    <option value="image-text">Image Text</option>
                    <option value="link-list">Link List</option>
                    <option value="empty">Empty</option>
                    <option value="agency-map">Agency map</option>
                </select>
            </div>
        );
    }
}
