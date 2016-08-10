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

    handleClick(){
        this.props.onSectionClick(this.props.index);
    },

    render(){

        var classNames = 'multisection-section section-agency-details col-sm-6 ';
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
    }
});


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

var ButtonLinkSection = React.createClass({

    propTypes: {
        sectionObject: React.PropTypes.object,
        index: React.PropTypes.number,
        onSectionClick: React.PropTypes.func,
        selectedObjectKey: React.PropTypes.number
    },

    getDefaultProps(){
        return {
            sectionObject: {
                id: "button-link",
                size: "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3",
                bgImageUrl: "/wp-content/uploads/2015/01/8009906473_81da7b8652_o-e1420495660219.jpg",
                caption: "Looking For a Property To Rent",
                href: "/listings/",
                buttonText: "Recent listings",
                transparency: '0.5'
            }
        };
    },

    handleClick(){
        this.props.onSectionClick(this.props.index);
    },

    render(){

        var sectionClassName = 'multisection-section section-button-link col-sm-6 ' + this.props.sectionObject.size;
        var sectionStyles = {
            backgroundImage: 'url(\'' + this.props.sectionObject.bgImageUrl + '\')'
        };

        if(this.props.index == this.props.selectedObjectKey){
            sectionClassName += ' selected';
        }

        var divStyle = {
            backgroundColor: 'rgba(0,0,0,' + this.props.sectionObject.transparency + ') !important'
        };

        //:todo update props with ? : '' to check for empty prop or find a better way

        return (
            <section className={sectionClassName} style={sectionStyles}>
                <div className="select-overlay" onClick={this.handleClick}>
                    <div className="center-flex-item"> Click to Edit </div>
                </div>
                <div className="multisection-section-overlay" style={divStyle}>
                    <div className="l-table">
                        <div className="l-table-row">
                            <div className="l-table-cell">
                                <div className="section-button-link-container">
                                    <p className="section-button-link-caption">{this.props.sectionObject.caption}</p>
                                    <a href={this.props.sectionObject.href ? this.props.sectionObject.href: ''}
                                       target={this.props.sectionObject.target}
                                       className="btn brand-colors brand-colors-hover">{ this.props.sectionObject.buttonText }
                                       </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});






export {AgencyDetailsSection, Empty, ButtonLinkSection};
