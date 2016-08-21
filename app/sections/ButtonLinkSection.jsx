/**
 * Created by Peter on 22/08/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

var ButtonLinkSection = React.createClass({

    propTypes: {
        sectionObject: React.PropTypes.object,
        index: React.PropTypes.number,
        onSectionClick: React.PropTypes.func,
        selectedObjectKey: React.PropTypes.number,
        siteURL: React.PropTypes.string
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
                transparency: '0.5',
                siteURL: 'http://felix.e1.siteloft.com'
            }
        };
    },

    handleClick(){
        this.props.onSectionClick(this.props.index);
    },

    render(){

        var sectionClassName = 'multisection-section section-button-link col-sm-6 ' + this.props.sectionObject.size;
        var href = this.props.sectionObject.href ? this.props.sectionObject.href: '';
        var siteURL = this.props.siteURL ? this.props.siteURL : '';
        var sectionStyles = {
            backgroundImage: 'url(\'' + siteURL + this.props.sectionObject.bgImageUrl + '\')'
        };

        if(this.props.index == this.props.selectedObjectKey){
            sectionClassName += ' selected';
        }

        var divStyle = {
            backgroundColor: 'rgba(0,0,0,' + this.props.sectionObject.transparency + ') !important'
        };

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
                                    <a href={href}
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

export {ButtonLinkSection};