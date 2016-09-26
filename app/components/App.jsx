/**
 * Created by Peter on 1/08/2016.
 */
'use strict';

import React from 'react';
import  {Editor} from './Editor.jsx'
import {Grid} from './Grid.jsx';
import {HeaderContainer} from './HeaderContainer.jsx'
import {Window} from './Window.jsx';

/**
 * App is the entry point react component and the state holder for the application, it handles all changes by calling
 * methods on the sections object which are delegated to the sectionsModel.
 */
export default class App extends React.Component {

    static propTypes = {
        sectionsObject: React.PropTypes.object,
        siteURL: React.PropTypes.string,
        onLoad: React.PropTypes.func
    };


    /**
     * Only Component with state holds state for all components
     */
    constructor(props) {
        super(props);

        this.state = {
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
    }

    componentDidMount(){
        this.props.onLoad();
    }

    /**
     * This will handle an edit make to one of the sections property, it will update the state
     * with the newly changed property
     * @param index {int} the index of the section in the array
     * @param event
     */
    handleEditorEdit = (index, event) => {
        this.state.sectionsObject.sections[index][event.target.name] = event.target.value;
        this.setState({sectionsObject:  this.state.sectionsObject});
    };

    /**
     * When a section is clicked it will be made the selected object
     * @param index {int}the index of the section in the array
     */
    handleSectionClick = (index) => {
        this.setState({selectedObjectKey: index})
    };

    /**
     * Moves the selected section up or down in the array of components
     * @param currentIndex
     * @param newIndex
     */
    handleEditorPositionClick = (currentIndex, newIndex) => {
        var success = this.state.sectionsObject.move(currentIndex, newIndex);
        if(success) {
            this.setState({sectionsObject: this.state.sectionsObject, selectedObjectKey: newIndex})
        }
    };

    /**
     * Handles adding a new section
     */
    handleEditorAddClick = () => {
        this.state.sectionsObject.add();
        this.setState({sectionsObject: this.state.sectionsObject});
    };

    /**
     * handles changing a sections type
     * @param event
     */
    handleEditorSelectChange = (event) => {
        var success = this.state.sectionsObject.set(this.state.selectedObjectKey ,event.target.value);
        if(success) {
            this.setState({sectionsObject: this.state.sectionsObject});
        }
    };

    /**
     * Handles deleting a section
     * @param index {int} index of the section in the array
     */
    handleEditorDeleteClick = (index) => {
        this.state.sectionsObject.delete(index);
        if(this.state.sectionsObject.sections.length <= index){
            this.state.selectedObjectKey -= 1;
            this.setState({sectionsObject: this.state.sectionsObject, selectedObjectKey: this.state.selectedObjectKey});
        } else {
            this.setState({sectionsObject: this.state.sectionsObject});
        }

    };

    /**
     * handles changes to the site URL
     * @param value {string} new value
     */
    handleHeaderSiteURLChange = (value) =>{
        this.setState({siteURL: value});
    };

    /**
     * When import is clicked display the import window
     */
    handleHeaderImportClick = () => {
        this.setState({windowState: {
            display: "active",
            contentType: "import",
            content: "Enter JSON string here",
            title: "Import"
        }});
    };

    /**
     * When export is click display the exprort window
     */
    handleHeaderExportClick = () => {
        var JSONString = this.state.sectionsObject.export();
        this.setState({windowState: {
            display: "active",
            contentType: "export",
            content: JSONString,
            title: "Export"
        }});
    };

    /**
     * handle the winow close button click, close the window
     */
    handleWindowCloseClick = () => {
        this.state.windowState.display = '';
        this.setState({windowState: this.state.windowState});
    };

    /**
     * handle Import, when the import window's import button is clicked
     * use the sectionsObject delegate to attempt to import the JSOn string
     */
    handleWindowImportClick = () => {
        if(this.state.tempJSONString != ''){
            //attempt to import
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
                        contentType: 'message',
                        content: status.error,
                        title: "Error"
                    }
                });
            }
        }
    };

    /**
     * Update the state
     * @param value
     */
    handleWindowImportTextAreaChange = (value) => {
        this.state.tempJSONString = value;
        this.setState({windowState: {
                display: "active",
                contentType: 'import',
                content: value,
                title: "Import"
        }});
    };

    handleEditorInnerListInputChange = (index, name, value) => {
        var key = this.state.selectedObjectKey;
        //update value of inner list
        this.state.sectionsObject.sections[key].list[index][name] = value;
        this.setState({sectionsObject: this.state.sectionsObject});
    };

    handleRemoveListClick = (index) => {
        var key = this.state.selectedObjectKey;
        //remove inner list
        this.state.sectionsObject.sections[key].list.splice(index,1);
        this.setState({sectionsObject: this.state.sectionsObject});

    };

    handleAddListClick = () => {
        var key = this.state.selectedObjectKey;
        this.state.sectionsObject.sections[key].list.push({
            text: '',
            href: ''
        });
        this.setState({sectionsObject: this.state.sectionsObject});
    };

    /**
     * Render all components and thier children
     * @returns {XML}
     */
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
                            onEdit={this.handleEditorEdit}
                            onEditorAddClick={this.handleEditorAddClick}
                            onEditorSelectChange={this.handleEditorSelectChange}
                            onEditorDeleteClick={this.handleEditorDeleteClick}
                            onListAddListClick={this.handleAddListClick}
                            onListRemoveListClick={this.handleRemoveListClick}
                            onListInnerListInputChange={this.handleEditorInnerListInputChange}
                    />
                    <Grid sections={this.state.sectionsObject.sections}
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
    }

}