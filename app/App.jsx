/**
 * Created by Peter on 1/08/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';
import  {Editor} from '../app/Editor.jsx'
import {Grid} from '../app/Grid.jsx';
import {HeaderContainer} from '../app/HeaderContainer.jsx'

/**
 * App is the entry point react component and the state holder for the application, it handles all changes by calling
 * methods on the sections object which are delegated to the sectionsModel.
 */
var App = React.createClass({

    propTypes:{
        sectionsObject: React.PropTypes.object,
        selectedObjectKey: React.PropTypes.number,
        siteURL: React.PropTypes.string
    },

    getInitialState(){
        return {
            sectionsObject: this.props.sectionsObject,
            selectedObjectKey: this.props.selectedObjectKey,
            siteURL: this.props.siteURL
        }
    },

    render(){
            return (
                <div className="app">
                    <HeaderContainer
                        siteURL={this.state.siteURL}
                        onSiteURLChange={this.handleHeaderSiteURLChange}
                        onExportClick={this.handleExportClick}
                        onImportClick={this.handleImportClick}

                    />
                    <main>
                        <Editor selectedObjectKey={this.state.selectedObjectKey}
                                onEditorPositionClick={this.handleEditorPositionClick}
                                sectionsObject={this.state.sectionsObject.sections}
                                onEdit={this.handleEdit}
                                onEditorAddClick={this.handleEditorAddClick}
                                onEditorSelectChange={this.handleEditorSelectChange}
                                onEditorDeleteClick={this.handleEditorDeleteClick}
                        />
                        <Grid sectionsObject={this.state.sectionsObject}
                              selectedObjectKey={this.state.selectedObjectKey}
                              onSectionClick={this.handleSectionClick}
                              siteURL={this.state.siteURL}
                        />
                    </main>
                </div>
            );
    },

    handleEdit(key, event){
        this.state.sectionsObject.sections[key][event.target.name] = event.target.value;
        this.setState({sectionsObject:  this.state.sectionsObject});
    },

    handleSectionClick(index){
        this.setState({selectedObjectKey: index})
    },

    handleEditorPositionClick(currentIndex, newIndex){
        var success = this.state.sectionsObject.move(currentIndex, newIndex);
        if(success) {
            this.setState({sectionsObject: this.state.sectionsObject, selectedObjectKey: newIndex})
        }
    },

    handleEditorAddClick(){
        this.state.sectionsObject.add();
        this.setState({sectionsObject: this.state.sectionsObject});
    },

    handleEditorSelectChange(event){
        var success = this.state.sectionsObject.set(this.state.selectedObjectKey ,event.target.value);
        if(success) {
            this.setState({sectionsObject: this.state.sectionsObject});
        }
    },

    handleEditorDeleteClick(index){
        this.state.sectionsObject.delete(index);
        if(this.state.sectionsObject.sections.length <= index){
            this.state.selectedObjectKey -= 1;
            this.setState({sectionsObject: this.state.sectionsObject, selectedObjectKey: this.state.selectedObjectKey});
        } else {
            this.setState({sectionsObject: this.state.sectionsObject});
        }

    },

    handleHeaderSiteURLChange(value){
        this.setState({siteURL: value});
    }

});

export {App};