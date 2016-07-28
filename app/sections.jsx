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
        sectionObject: React.PropTypes.object,
        index: React.PropTypes.number,
        onSectionClick: React.PropTypes.func,
        selectedObjectKey: React.PropTypes.number
    },
    

    getDefaultProps(){
        return {
            sectionObject: {
                id: 'agency-details',
                size: 'col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3',
                colour: 'header-colors'
            }
        }
    },

    render(){

        var classNames = "multisection-section section-agency-details col-sm-6 ";
        classNames += this.props.sectionObject.size + this.props.sectionObject.colour;

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
    },
    
    handleClick(event){
        this.props.onSectionClick(this.props.index);
    }
});






export {AgencyDetailsSection};
