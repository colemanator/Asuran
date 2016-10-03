/**
 * Created by Peter on 17/07/2016.
 */
'use strict';

import React from 'react';

//sections
import AgencyDetailsSection from './sections/AgencyDetailsSection.jsx';
import AgencyMapSection from './sections/AgencyMapSection.jsx';
import ButtonLinkSection from './sections/ButtonLinkSection.jsx';
import EmptySection from './sections/EmptySection.jsx';
import ImageSection from './sections/ImageSection.jsx';
import ImageTextSection from './sections/ImageTextSection.jsx';
import LinkListSection from './sections/LinkListSection.jsx';

/**
 * Grid component responsible for generating the sections based on the sections Object provided
 * @type {*|Function}
 */
export default class Grid extends React.Component {

    static propTypes = {
        sections: React.PropTypes.array,
        selectedObjectKey: React.PropTypes.number,
        siteURL: React.PropTypes.string,

        //functions
        onSectionClick: React.PropTypes.func
    };


    /**
     * render the grid of sections
     * @returns {XML}
     */
    render() {
        return (

            <div className="home-multisection-widget row">
                {this.renderSections()}
            </div>
        );
    }

    /**
     * create an array of components for each section in the array
     * @returns {Array} array of components
     */
    renderSections() {

        return this.props.sections.map((section, index) => {
            switch (section.id) {
                case 'agency-details':
                    return (
                        <AgencyDetailsSection
                            key={index}
                            index={index}
                            selectedObjectKey={this.props.selectedObjectKey}
                            onSectionClick={this.props.onSectionClick}
                            {...section}
                        />
                    );
                case 'agency-map':
                    return (
                        <AgencyMapSection
                            key={index}
                            index={idex}
                            selectedObjectKey={this.props.selectedObjectKey}
                            onSectionClick={this.props.onSectionClick}
                            {...section}
                        />
                    );
                case 'button-link':
                    return (
                        <ButtonLinkSection
                            key={index}
                            index={index}
                            selectedObjectKey={this.props.selectedObjectKey}
                            onSectionClick={this.props.onSectionClick}
                            siteURL={this.props.siteURL}
                            {...section}
                        />
                    );
                case 'image':
                    return (
                        <ImageSection
                            key={index}
                            index={index}
                            selectedObjectKey={this.props.selectedObjectKey}
                            onSectionClick={this.props.onSectionClick}
                            siteURL={this.props.sections[i].siteURL}
                            {...section}
                        />
                    );
                case 'image-text':
                    return (
                        <ImageTextSection
                            key={index}
                            index={index}
                            selectedObjectKey={this.props.selectedObjectKey}
                            siteURL={this.props.sections[i].siteURL}
                            onSectionClick={this.props.onSectionClick}
                            {...section}
                        />
                    );
                case 'link-list':
                    return (
                        <LinkListSection
                            key={index}
                            index={index}
                            selectedObjectKey={this.props.selectedObjectKey}
                            onSectionClick={this.props.onSectionClick}
                            {...section}
                        />
                    );
                default:
                    return (
                        <EmptySection
                            key={index}
                            index={index}
                            selectedObjectKey={this.props.selectedObjectKey}
                            onSectionClick={this.props.onSectionClick}
                        />
                    );
            }
        });
    }
}