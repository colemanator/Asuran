/**
 * Created by Peter on 17/07/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

//sections
import {AgencyDetailsSection} from './sections/AgencyDetailsSection.jsx';
import {ButtonLinkSection} from './sections/ButtonLinkSection.jsx';
import {EmptySection} from './sections/EmptySection.jsx';
import {ImageSection} from './sections/ImageSection.jsx';
import {ImageTextSection} from './sections/ImageTextSection.jsx';
import {LinkListSection} from './sections/LinkListSection.jsx';

/**
 * Grid component responsible for generating the sections based on the sections Object provided
 * @type {*|Function}
 */
var Grid = React.createClass({
    
    propTypes:{
        sections: React.PropTypes.array,
        selectedObjectKey: React.PropTypes.number,
        siteURL: React.PropTypes.string,

        //functions
        onSectionClick: React.PropTypes.func

    },


    /**
     * render the grid of sections
     * @returns {XML}
     */
    render(){
        return (
         
                <div className="home-multisection-widget row">
                    {this.renderSections()}
                </div>
        );
    },

    /**
     * create an array of components for each section in the array
     * @returns {Array} array of components
     */
    renderSections(){

        var sectionsArray = [];

        for(let i = 0; i < this.props.sections.length; i++ ){
            switch(this.props.sections[i].id) {
                case 'agency-details':
                    sectionsArray.push(
                        <AgencyDetailsSection
                            key={i}
                            index={i}
                            selectedObjectKey={this.props.selectedObjectKey}
                            onSectionClick={this.props.onSectionClick}
                            id={this.props.sections[i].id}
                            size={this.props.sections[i].size}
                            colour={this.props.sections[i].colour}
                        />
                    );
                    break;
                case 'agency-map':
                    sectionsArray.push(<agencyMapSection/>);
                    break;
                case 'button-link':
                    sectionsArray.push(
                        <ButtonLinkSection
                            key={i}
                            index={i}
                            selectedObjectKey={this.props.selectedObjectKey}
                            id={this.props.sections[i].id}
                            size={this.props.sections[i].size}
                            bgImageUrl={this.props.sections[i].bgImageUrl}
                            caption={this.props.sections[i].caption}
                            href={this.props.sections[i].href}
                            target={this.props.sections[i].target}
                            buttonText={this.props.sections[i].buttonText}
                            transparency={this.props.sections[i].transparency}
                            siteURL={this.props.siteURL}
                            onSectionClick={this.props.onSectionClick}
                        />
                    );
                    break;
                case 'image':
                    sectionsArray.push(
                        <ImageSection
                            key={i}
                            index={i}
                            selectedObjectKey={this.props.selectedObjectKey}
                            size={this.props.sections[i].size}
                            bgImageURL={this.props.sections[i].bgImageUrl}
                            siteURL={this.props.sections[i].siteURL}
                            onSectionClick={this.props.onSectionClick}
                        />
                    );
                    break;
                case 'image-text':
                    sectionsArray.push(
                        <ImageTextSection
                            key={i}
                            index={i}
                            selectedObjectKey={this.props.selectedObjectKey}
                            size={this.props.sections[i].size}
                            bgImageURL={this.props.sections[i].bgImageUrl}
                            caption={this.props.sections[i].caption}
                            transparency={this.props.sections[i].transparency}
                            siteURL={this.props.sections[i].siteURL}
                            onSectionClick={this.props.onSectionClick}
                        />
                    );
                    break;
                case 'link-list':
                    sectionsArray.push(
                        <LinkListSection
                            key={i}
                            index={i}
                            selectedObjectKey={this.props.selectedObjectKey}
                            size={this.props.sections[i].size}
                            colors={this.props.sections[i].colors}
                            linkColor={this.props.sections[i]['link_color']}
                            highlightColor={this.props.sections[i]['heighlight-color']}
                            list={this.props.sections[i].list}
                            onSectionClick={this.props.onSectionClick}
                        />);
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
                default:
                    sectionsArray.push(
                        <EmptySection
                            key={i}
                            index={i}
                            selectedObjectKey={this.props.selectedObjectKey}
                            onSectionClick={this.props.onSectionClick}
                        />
                    );
                    break;
            }

        }

        return sectionsArray;
    }

});

export {Grid};