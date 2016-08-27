/**
 * Created by Peter on 13/08/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

var Window = React.createClass({

    propTypes:{
        display: React.PropTypes.string,
        contentType: React.PropTypes.string,
        content: React.PropTypes.string,
        title: React.PropTypes.string,

        onCloseClick: React.PropTypes.func,
        onImportClick: React.PropTypes.func,
        onImportTextAreaChange: React.PropTypes.func
    },

    handleCloseClick(){
        this.props.onCloseClick()
    },

    handleImportClick(){
        this.props.onImportClick();
    },

    /**
     * copy the current value of the text area to click board
     */
    handleCopyClick(){
        document.getElementById('export-text-area').select();
        document.execCommand('copy');
        this.props.onCloseClick();
    },

    handleImportTextAreaChange(event){
        this.props.onImportTextAreaChange(event.target.value);
    },

    /**
     * not sure if this should be broken into different components
     * Create one of the three different types of windows
     * @returns {XML}
     */
    displayContent(){

        var contentClassName = 'content';

        if(this.props.contentType == 'message'){
            return (
                <div className={contentClassName}>
                    <h2>{this.props.title}</h2>
                    <div className="message">
                        {this.props.content}
                    </div>
                    <div className="controls">
                        <div className="button close" onClick={this.handleCloseClick}>Close</div>
                    </div>
                </div>
            );
        } else if(this.props.contentType == 'export'){
            return (
                <div className={contentClassName}>
                    <h2>{this.props.title}</h2>
                    <div className="export">
                        <textarea value={this.props.content}
                                  id="export-text-area"
                                  readOnly="readOnly">
                            {this.props.content}
                        </textarea>
                    </div>
                    <div className="controls">
                        <div className="button copy" onClick={this.handleCopyClick}>Copy</div>
                        <div className="button close" onClick={this.handleCloseClick}>Close</div>
                    </div>
                </div>
            );
        } else if(this.props.contentType == 'import'){
            return (
                <div className={contentClassName}>
                    <h2>{this.props.title}</h2>
                    <div className="import">
                        <textarea placeholder={this.props.content}
                                  value=""
                                  onChange={this.handleImportTextAreaChange}
                        >
                        </textarea>
                    </div>
                    <div className="controls">
                        <div className="button import" onClick={this.handleImportClick}>Import</div>
                        <div className="button close" onClick={this.handleCloseClick}>Close</div>
                    </div>
                </div>
            );
        }
    },

    /**
     * render out the window
     * @returns {XML}
     */
    render(){

        var windowClassName = 'window ' + this.props.display;

        return (
            <div className={windowClassName}>
                <div className='overlay'></div>
                <div className='content-container'>
                    {this.displayContent()}
                </div>
            </div>
        );
    },
});

export {Window};