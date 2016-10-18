/**
 * Created by Peter on 1/08/2016.
 */
'use strict';

import React from 'react'
import { connect } from 'react-redux'
import Editor from './Editor.jsx'
import Grid from './Grid.jsx'
import HeaderContainer from './HeaderContainer.jsx'
import Window from './Window.jsx'
import {setSiteURL, setExportWindow, setImportWindow} from '../redux/actions/app'
import {setSection, setSelectedSectionIndex, shitSection, updateSection, deleteSection, addSection, sectionListAdd, sectionListDelete, sectionListUpdate} from '../redux/actions/sections'

/**
 * App is the entry point react component and the state holder for the application, it handles all changes by calling
 * methods on the sections object which are delegated to the sectionsModel.
 */
class App extends React.Component {

    static propTypes = {
        sectionsObject: React.PropTypes.object,
        siteURL: React.PropTypes.string,
        onLoad: React.PropTypes.func
    };

    /**
     * Constructor
     */
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.onLoad();
    }

    /**
     * Render all components and their children
     * @returns {XML}
     */
    render(){

        return (
            <div className="app">
                <HeaderContainer
                    siteURL={this.props.siteURL}
                    onSiteURLChange={this.props.onSiteURLChange}
                    onImportClick={this.props.onSetImportWindow}
                    onExportClick={this.props.onSetExportWindow}
                />
                <main>
                    <Editor selectedSectionIndex={this.props.selectedSectionIndex}
                            onShiftSectionClick={this.props.onShiftSectionClick}
                            sections={this.props.sections}
                            defaultSections={this.props.defaultSections}
                            onEdit={this.props.onChangeSection}
                            onEditorAddClick={this.props.onAddSectionClick}
                            onEditorSelectChange={this.props.onSelectSectionChange}
                            onEditorDeleteClick={this.props.onDeleteSectionClick}
                            onSetSelectedSectionIndex={this.props.onSetSelectedSectionIndex}

                            onListAddListClick={this.props.sectionListAdd}
                            onListRemoveListClick={this.props.sectionListDelete}
                            onListInnerListInputChange={this.props.sectionListUpdate}
                    />
                    <Grid sections={this.props.sections}
                          selectedObjectKey={this.props.selectedSectionIndex}
                          onSectionClick={this.props.onSetSelectedSectionIndex}
                          siteURL={this.props.siteURL}
                    />
                </main>
                <Window/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sections: state.sections.toArray().map((section) => {
            section = section.toObject();
            if(section.id == 'link-list' && section.hasOwnProperty('list')){
                section.list = section.list.toArray().map((item) => {return item.toObject()})
            }
            return section;
        }),
        defaultSections: state.defaultSections,
        siteURL: state.siteURL,
        selectedSectionIndex: state.selectedSectionIndex
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetSelectedSectionIndex: (index) => {
            dispatch(setSelectedSectionIndex(index))
        },
        onChangeSection: (index, key, value) => {
            dispatch(updateSection(index, key, value))
        },
        onShiftSectionClick: (index, newIndex) => {
            dispatch(shitSection(index, newIndex))
        },
        onAddSectionClick: () => {
            dispatch(addSection())
        },
        onSelectSectionChange: (index, section) => {
            dispatch(setSection(index, section))
        },
        onDeleteSectionClick: (index) => {
            dispatch(deleteSection(index))
        },
        onSiteURLChange: (url) => {
            dispatch(setSiteURL(url))
        },
        onSetExportWindow: () => {
            dispatch(setExportWindow())
        },
        onSetImportWindow: () => {
            dispatch(setImportWindow())
        },
        sectionListUpdate: (index, key, itemIndex, itemKey, itemValue) => {
            dispatch(sectionListUpdate(index, key, itemIndex, itemKey, itemValue))
        },
        sectionListAdd: (index, key) => {
            dispatch(sectionListAdd(index, key))
        },
        sectionListDelete: (index, key, itemIndex) => {
            dispatch(sectionListDelete(index, key, itemIndex))
        }

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);