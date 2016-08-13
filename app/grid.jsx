/**
 * Created by Peter on 17/07/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';
import {AgencyDetailsSection, Empty, ButtonLinkSection} from '../app/sections.jsx';

/**
 * Grid component responsible for generating the sections based on the sections Object provided
 * @type {*|Function}
 */
var Grid = React.createClass({
    
    propTypes:{
        sectionsObject: React.PropTypes.object,
        selectedObjectKey: React.PropTypes.number,
        onSectionClick: React.PropTypes.func,
        siteURL: React.PropTypes.string
    },
    

    render(){
        return (
         
                <div className="home-multisection-widget row">
                    {this.renderSections()}
                </div>
        );
    },

    renderSections(){

        var sectionsArray = [];

        for(let i = 0; i < this.props.sectionsObject.sections.length; i++ ){
            switch(this.props.sectionsObject.sections[i].id) {
                case 'agency-details':
                    sectionsArray.push(<AgencyDetailsSection key={i} index={i} selectedObjectKey={this.props.selectedObjectKey} onSectionClick={this.props.onSectionClick} sectionObject={this.props.sectionsObject.sections[i]}/>);
                    break;
                case 'agency-map':
                    sectionsArray.push(<agencyMapSection/>);
                    break;
                case 'button-link':
                    sectionsArray.push(<ButtonLinkSection key={i} index={i} selectedObjectKey={this.props.selectedObjectKey} onSectionClick={this.props.onSectionClick} sectionObject={this.props.sectionsObject.sections[i]} siteURL={this.props.siteURL}/>);
                    break;
                case 'image':
                    sectionsArray.push(<imageSection/>);
                    break;
                case 'image-text':
                    sectionsArray.push(<imageTextSection/>);
                    break;
                case 'link-list':
                    sectionsArray.push(<linkListSection/>);
                    break;
                case 'listings-slider':
                    sectionsArray.push(<listingsSliderSection/>);
                    break;
                case 'single-Listing':
                    sectionsArray.push(<singleListingSection/>);
                    break;
                case 'staff-locator':
                    sectionsArray.push(<staffLocatorSection/>);
                    break;
                case 'testimonials':
                    sectionsArray.push(<testimonialsSection/>);
                    break;
                case 'title-text':
                    sectionsArray.push(<titleTextSection/>);
                    break;
                case 'video-link':
                    sectionsArray.push(<videoLinkSection/>);
                    break;
                case 'empty':
                    sectionsArray.push(<Empty key={i} index={i} selectedObjectKey={this.props.selectedObjectKey} onSectionClick={this.props.onSectionClick}/>);
                    break;
            }

        }

        return sectionsArray;
    }

});

export {Grid};