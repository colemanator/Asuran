/**
 * Created by Peter on 22/08/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

var SectionSelect = React.createClass({

    PropTypes:{
        sectionsObject: React.PropTypes.object,
        selectedObjectKey: React.PropTypes.number,
        onEditorSelectChange: React.PropTypes.func
    },

    handleSelectChange(event){
        this.props.onEditorSelectChange(event);
    },

    /**
     * render out the select input
     * @returns {XML}
     */
    render(){
        return (
            <div className="editor-section select">
                <h3>Change Section Type</h3>
                <select className="section-select" onChange={this.handleSelectChange} value={this.props.sectionsObject[this.props.selectedObjectKey].id}>
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

    },
});

export {SectionSelect};
