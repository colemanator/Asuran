/**
 * Created by Peter on 15/10/16.
 */
'use strict';

import React from 'react'
import {exportSections} from '../../modules/sections'

export default class Export extends React.Component {

    static propTypes = {
        sections: React.PropTypes.array,
        version: React.PropTypes.number,

        //functions
        onCloseClick: React.PropTypes.func
    };

    /**
     * copies the text in the teatarea to clipboard
     */
    onCopyClick = () => {
        document.getElementById('export-content').select();
        try{
            document.execCommand('copy');
            this.props.onCloseClick();
        } catch(err){
            console.warn('Click command failed')
        }
    };

    render(){
        return (
            <div className="content export">
                <h2>Export</h2>
                <textarea id="export-content" readOnly="readOnly" value={exportSections(this.props.sections,this.props.version)}/>
                <div className="controls">
                    <div className="button" onClick={this.props.onCloseClick}>Close</div>
                    <div className="button" onClick={this.onCopyClick}>Copy</div>
                </div>
            </div>
        );
    }
}