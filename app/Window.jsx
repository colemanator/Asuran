/**
 * Created by Peter on 13/08/2016.
 */
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

    //not sure if this should be broken into different components
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
                        <textarea value={this.props.content}>
                            {this.props.content}
                        </textarea>
                    </div>
                    <div className="controls">
                        <div className="button copy">Copy</div>
                        <div className="button close" onClick={this.handleCloseClick}>Close</div>
                    </div>
                </div>
            );
        } else if(this.props.contentType == 'import'){
            return (
                <div className={contentClassName}>
                    <h2>{this.props.title}</h2>
                    <div className="import">
                        <textarea defaultValue="Enter JSON string here" onChange={this.handleImportTextAreaChange}>
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

    handleCloseClick(){
        this.props.onCloseClick()
    },

    handleImportClick(){
        this.props.onImportClick();
    },

    handleImportTextAreaChange(event){
        this.props.onImportTextAreaChange(event.target.value);
    }
});

export {Window};