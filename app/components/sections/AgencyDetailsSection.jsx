/**
 * Created by Peter on 17/07/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

/**
 * Section for Agency details
 */
var AgencyDetailsSection = React.createClass({

    propTypes: {
        //standard
        index: React.PropTypes.number,
        selectedObjectKey: React.PropTypes.number,

        //component specific
        id: React.PropTypes.string,
        size: React.PropTypes.string,
        colour: React.PropTypes.string,

        //functions
        onSectionClick: React.PropTypes.func

    },

    handleClick(){
        this.props.onSectionClick(this.props.index);
    },

    render(){

        var classNames = 'multisection-section section-agency-details col-sm-6 ';
        classNames += this.props.size + ' ' + this.props.colour;

        if(this.props.index == this.props.selectedObjectKey){
            classNames += ' selected';
        }

        return (
            <section className={classNames}>
                <div className="select-overlay" onClick={this.handleClick}>
                    <div className="center-flex-item"> Click to Edit </div>
                </div>
                <div className="l-table section-agency-details-table">
                    <div className="l-table-row">
                        <div className="l-table-cell">
                            <h4 className='agency-heading'>Site Loft</h4>
                            <h6 className='agency-sub-heading'>Call</h6>
                            <h5 className="agency-details-text">54989257</h5>
                            <h6 className='agency-sub-heading'>Fax</h6>
                            <h5 className="agency-details-text">8976456765</h5>
                            <h6 className='agency-sub-heading'>Email</h6>
                            <h5 className="agency-details-text"><a href='mailto: siteloft@siteloft.io'>siteloft@siteloft.io</a></h5>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

export {AgencyDetailsSection};
