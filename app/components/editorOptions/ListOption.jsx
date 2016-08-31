/**
 * Created by Peter on 29/08/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

var ListOption = React.createClass({

    propTypes: {
        sectionOptionList: React.PropTypes.array,

        //functions
        onInnerListInputChange: React.PropTypes.func,
        onRemoveListClick: React.PropTypes.func,
        onAddListClick: React.PropTypes.func

    },

    HandleInnerListInputChange(event ,index, name){
        var value = event.target.value;
        this.props.onInnerListInputChange(index, name, value);
    },

    handleRemoveInnerListClick(index){
        this.props.onRemoveListClick(index);
    },

    handleAddListClick(){
        this.props.onAddListClick();
    },

    /**
     * Used to generate the inner list which contains the inputs for each linkList Item,
     * @param i {int} the current index in a loop
     * @returns {Array}
     */
    innerList(i){

        var innerList = [];
        var key = 0;

        for (let property in this.props.sectionOptionList[i]){
            innerList.push(
                <li key={key}>
                    <input type="text" defaultValue={this.props.sectionOptionList[i][property]} onChange={this.HandleInnerListInputChange.bind(this, [i,property])} name={property}/>
                </li>
            );
            key++;
        }

        return innerList;
    },

    /**
     * Create the top level list, for each link list item then call innerList to generate the inner list of inputs
     * @returns {Array}
     */
    list(){

        var list = [];

        for(let i = 0; i < this.props.sectionOptionList.length; i++){
            list.push(
                <ul key={i}>
                    {this.innerList(i)}
                    <li>
                        <button onClick={this.handleRemoveInnerListClick.bind(this, i)}>Remove</button>
                    </li>
                </ul>
            );
        }

        return list;

    },

    render(){

        return (
            <div className="list-option">
                <ul>
                    {this.list()}
                </ul>
                <button onClick={this.handleAddListClick}>Add</button>
            </div>
        );
    }

});

export {ListOption};