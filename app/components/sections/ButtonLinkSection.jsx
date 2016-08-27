/**
 * Created by Peter on 22/08/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

var ButtonLinkSection = React.createClass({

    propTypes: {
        //standard
        index: React.PropTypes.number,
        selectedObjectKey: React.PropTypes.number,
        
        //component specific
        id: React.PropTypes.string,
        size: React.PropTypes.string,
        bgImageUrl: React.PropTypes.string,
        caption: React.PropTypes.string,
        href: React.PropTypes.string,
        target: React.PropTypes.string,
        buttonText: React.PropTypes.string,
        transparency: React.PropTypes.string,
        siteURL: React.PropTypes.string,

        //functions
        onSectionClick: React.PropTypes.func,
    },

    handleClick(){
        this.props.onSectionClick(this.props.index);
    },

    render(){

        var sectionClassName = 'multisection-section section-button-link col-sm-6 ' + this.props.size;
        var href = this.props.href ? this.props.href: '';
        var siteURL = this.props.siteURL ? this.props.siteURL : '';
        var sectionStyles = {
            backgroundImage: 'url(\'' + siteURL + this.props.bgImageUrl + '\')'
        };

        if(this.props.index == this.props.selectedObjectKey){
            sectionClassName += ' selected';
        }

        var divStyle = {
            backgroundColor: 'rgba(0,0,0,' + this.props.transparency + ') !important'
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
                                    <p className="section-button-link-caption">{this.props.caption}</p>
                                    <a href={href}
                                       target={this.props.target}
                                       className="btn brand-colors brand-colors-hover">{ this.props.buttonText }
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