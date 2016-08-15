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
        title: React.PropTypes.string
    },


    render(){

        var overlayClassName = 'overlay ' + this.props.display;
        var containerClassName = "content-container " + this.props.display;


        return (
            <div className="window">
                <div className={overlayClassName}></div>
                <div className={containerClassName}>
                    {this.displayContent()}
                </div>
            </div>
        );
    },

    displayContent(){

        var contentClassName = 'content ' + this.props.contentType;

        if(this.props.contentType == 'message'){
            return (
                <div className={contentClassName}>
                    <h2>{this.props.title}</h2>
                    <div className="message">
                        {this.props.content}
                    </div>
                    <div className="controls">
                        <div className="button close">Close</div>
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
                        <div className="button close">Close</div>
                    </div>
                </div>
            );
        } else if(this.props.contentType == 'import'){
            return (
                <div className={contentClassName}>
                    <h2>{this.props.title}</h2>
                    <div className="import">
                        <textarea>
                            'Enter JSON string here'
                        </textarea>
                    </div>
                    <div className="controls">
                        <div className="button import">Import</div>
                        <div className="button close">Close</div>
                    </div>
                </div>
            );
        }
    },
});

export {Window};