/**
 * Created by Peter on 15/10/16.
 */
'use strict';

import React from 'react'
import {importSections} from '../../modules/sections'

export default class Import extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            sectionsJSON: '',
        }
    }

    static propTypes = {
        defaultSections: React.PropTypes.object,

        //functions
        onCloseClick: React.PropTypes.func,
        onImportSections: React.PropTypes.func
    };

    handleTextAreaChange = (event) => {
        this.setState({
            sectionsJSON: event.target.value
        });
    };

    handleImportClick = () => {
        var ImportData = importSections(this.state.sectionsJSON, this.props.defaultSections);
        this.props.onImportSections(ImportData.data.sections, ImportData.data.version)
    };


    render() {

        return (
            <div className="content import">
                <h2>Import</h2>
                <textarea placeholder='Enter JSON' onChange={this.handleTextAreaChange} onClick={this.handleTextAreaClick}/>
                <div className="controls">
                    <div className="button" onClick={this.props.onCloseClick}>Close</div>
                    <div className="button" onClick={this.handleImportClick}>Import</div>
                </div>
            </div>
        );
    }
}