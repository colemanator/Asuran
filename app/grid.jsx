/**
 * Created by Peter on 17/07/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';
import {AgencyDetailsSection} from '../app/sections.jsx';
import  {Editor} from '../app/Editor.jsx'

/**
 * This grid will contain all sections, it is responsible for creating, editing and deleting child sections
 * IT WILL ALSO HOLD ALL STATE for sections below. It can be initialised with an object containing the information to
 * create specific sections or it can start from scratch.
 * @type {*|Function}
 */
var Grid = React.createClass({

    propTypes: {
        sectionsObject: React.PropTypes.array,
        selectedObject: React.PropTypes.object
    },

    render(){

        if(this.props.sectionsObject) {
            return (
                <main>
                    <Editor selectedObject={this.props.selectedObject}/>
                    <div className="home-multisection-widget row">
                        {this.renderSections()}
                    </div>
                </main>
            );
        } else {
            return (
                <main>
                    <div className="menu-wrapper">
                        /*<menu selectedObject={this.props.selectedObject}/>*/
                    </div>
                    <div className="home-multisection-widget row">
                        /*<emptySection/>*/
                    </div>
                </main>
            );
        }
    },

    renderSections(){

        var sectionsArray = [];

        for(let i = 0; i < this.props.sectionsObject.length; i++ ){
            switch(this.props.sectionsObject[i].id) {
                case 'agency-details':
                    sectionsArray.push(<AgencyDetailsSection key={i} sectionObject={this.props.sectionsObject[i]}/>);
                    break;
                case 'agency-map':
                    sectionsArray.push(<agencyMapSection/>);
                    break;
                case 'button-link':
                    sectionsArray.push(<buttonLinkSection/>);
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

            }

        }

        return sectionsArray;
    }


    //render initial state will be a flex div with a side menu and a mulit section to contain sections

});

export {Grid};