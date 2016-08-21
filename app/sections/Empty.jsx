/**
 * Created by Peter on 22/08/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

var Empty = React.createClass({

    propTypes:{
        index: React.PropTypes.number,
        onSectionClick: React.PropTypes.func,
        selectedObjectKey: React.PropTypes.number
    },

    handleClick(){
        this.props.onSectionClick(this.props.index);
    },

    render(){

        var classNames = 'multisection-section section-agency-details bg-white col-sm-6 col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3';

        if(this.props.index == this.props.selectedObjectKey){
            classNames += ' selected';
        }

        return(
            <section className={classNames}>
                <div className="select-overlay empty" onClick={this.handleClick}>
                    <div className="center-flex-item"> Click to Edit</div>
                </div>
            </section>
        );
    }
});

export {Empty};