/**
 * Created by Peter on 13/08/2016.
 */
import React from 'react';
import {render} from 'react-dom';

var Window = React.createClass({

    propTypes:{
        display: React.PropTypes.string,
        contentType: React.PropTypes.string,
        content: React.PropTypes.string
    },


    render(){

        var overlayClassName = 'overlay ' + this.props.display;
        var containerClassName = "content-container " + this.props.display;
        var contentClassName = 'content ' + this.props.contentType;

        return (
            <div className="window">
                <div className={overlayClassName}></div>
                <div className={containerClassName}>
                    <div className={contentClassName}>
                        <h2>Error</h2>
                        <div className="message">
                            {this.props.content}
                        </div>
                        <div className="controls">
                            <div className="button close">Close</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    displayContent(){

        if(this.props.contentType == 'message'){
            return (
              <div className="message">
                  {this.props.content}
                  <div className="button close">Close</div>
              </div>
            );
        } else if(this.props.contentType == 'export'){
            return (
                <div className="export">
                    <textarea value={this.props.content}></textarea>
                    <div className="button copy">Copy</div>
                    <div className="button cancel">Cancel</div>
                </div>
            );
        } else if(this.props.contentType == 'import'){
            return (
                <div className="import">
                    <textarea></textarea>
                    <div className="button import">Import</div>
                    <div className="button cancel">Cancel</div>
                </div>
            );
        }

    }
});

export {Window};