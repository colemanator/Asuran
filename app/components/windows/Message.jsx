/**
 * Created by Peter on 15/10/16.
 */
'use strict';

import React from 'react'

export default class Message extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        content: React.PropTypes.string,

        //functions
        onCloseClick: React.PropTypes.func
    };

    render(){

        return (
            <div className="content message">
                <h2>{this.props.title}</h2>
                <div>{this.props.content}</div>
                <div className="controls">
                    <div onClick={this.props.onCloseClick}>Close</div>
                </div>
            </div>
        )
    }
}