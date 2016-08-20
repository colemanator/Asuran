/**
 * Created by Peter on 1/08/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';
import  {Editor} from '../app/Editor.jsx'
import {Grid} from '../app/Grid.jsx';
import {HeaderContainer} from '../app/HeaderContainer.jsx'
import {Window} from '../app/Window.jsx';

/**
 * App is the entry point react component and the state holder for the application, it handles all changes by calling
 * methods on the sections object which are delegated to the sectionsModel.
 */
var App = React.createClass({

    propTypes:{
        sectionsObject: React.PropTypes.object,
        siteURL: React.PropTypes.string,
    },

    getInitialState(){
        return {
            sectionsObject: this.props.sectionsObject,
            selectedObjectKey: 0,
            siteURL: this.props.siteURL,
            windowState: {
                display: "",
                contentType: "",
                content: "",
                title: ""
            },
            tempJSONString: ''
        }
    },

    render(){
            return (
                <div className="app">
                    <HeaderContainer
                        siteURL={this.state.siteURL}
                        onSiteURLChange={this.handleHeaderSiteURLChange}
                        onExportClick={this.handleHeaderExportClick}
                        onImportClick={this.handleHeaderImportClick}

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
                    <Window
                        display={this.state.windowState.display}
                        contentType={this.state.windowState.contentType}
                        content={this.state.windowState.content}
                        title={this.state.windowState.title}
                        onCloseClick={this.handleWindowCloseClick}
                        onImportClick={this.handleWindowImportClick}
                        onImportTextAreaChange={this.handleWindowImportTextAreaChange}
                    />
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
    },

    handleHeaderImportClick(){
        this.setState({windowState: {
            display: "active",
            contentType: "import",
            content: "Enter JSON string here",
            title: "Import"
        }});
    },

    handleHeaderExportClick(){
        var JSONString = this.state.sectionsObject.export();
        this.setState({windowState: {
            display: "active",
            contentType: "export",
            content: JSONString,
            title: "Export"
        }});
    },

    handleWindowCloseClick(){
        this.state.windowState.display = '';
        this.setState({windowState: this.state.windowState});
    },

    handleWindowImportClick(){
        if(this.state.tempJSONString != ''){
            var status = this.state.sectionsObject.import(this.state.tempJSONString);
            if(status.success){
                this.setState({
                    sectionsObject: this.state.sectionsObject,
                    windowState: {
                        display: "",
                        contentType: "",
                        content: "",
                        title: ""
                    }
                });
            } else {
                this.setState({
                    sectionsObject: this.state.sectionsObject,
                    windowState: {
                        display: "active",
                        contentType: status.error,
                        content: "message",
                        title: "Error"
                    }
                });
            }
        }
    },

    handleWindowImportTextAreaChange(value){
        this.state.tempJSONString = value;
    }

});

export {App};