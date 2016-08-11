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
        selectedObjectKey: React.PropTypes.number
    },

    getInitialState(){
        return {
            sectionsObject: this.props.sectionsObject,
            selectedObjectKey: this.props.selectedObjectKey
        }
    },

    render(){
            return (
                <div>
                    <HeaderContainer/>
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
        this.state.selectedObjectKey = index;
        this.setState({selectedObjectKey: this.state.selectedObjectKey})
    },

    handleEditorPositionClick(currentIndex, newIndex){
        var success = this.state.sectionsObject.move(currentIndex, newIndex);
        if(success) {
            this.state.selectedObjectKey = newIndex;
            this.setState({sectionsObject: this.state.sectionsObject, selectedObjectKey: this.state.selectedObjectKey})
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

    }

});

export {App};