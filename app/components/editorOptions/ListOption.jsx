/**
 * Created by Peter on 29/08/2016.
 */
'use strict';

import React from 'react';

export default class ListOption extends React.Component {

    static propTypes = {
        sectionOptionList: React.PropTypes.array,
        selectedSectionIndex: React.PropTypes.number,

        //functions
        onInnerListInputChange: React.PropTypes.func,
        onRemoveListClick: React.PropTypes.func,
        onAddListClick: React.PropTypes.func

    };

    HandleInnerListInputChange = (args, event) => {
        var value = event.target.value;
        this.props.onInnerListInputChange(this.props.selectedSectionIndex, 'list', args[0], args[1], value);
    };

    handleRemoveInnerListClick = (index) => {
        debugger;
        this.props.onRemoveListClick(this.props.selectedSectionIndex, 'list', index);
    };

    handleAddListClick = () => {
        this.props.onAddListClick(this.props.selectedSectionIndex, 'list');
    };

    /**
     * Used to generate the inner list which contains the inputs for each linkList Item,
     * @param i {int} the current index in a loop
     * @returns {Array}
     */
    innerList(i) {

        var innerList = [];
        var key = 0;

        for (let property in this.props.sectionOptionList[i]) {
            innerList.push(
                <li key={key}>
                    <input type="text" defaultValue={this.props.sectionOptionList[i][property]}
                           onChange={this.HandleInnerListInputChange.bind(this, [i, property])} name={property}/>
                </li>
            );
            key++;
        }

        return innerList;
    }

    /**
     * Create the top level list, for each link list item then call innerList to generate the inner list of inputs
     * @returns {Array}
     */
    list() {

        var list = [];

        for (let i = 0; i < this.props.sectionOptionList.length; i++) {

            var classNames = 'single-link-options';

            list.push(
                <li key={this.props.sectionOptionList[i].text+i} className={classNames}>
                    <ul>
                        {this.innerList(i)}
                        <li>
                            <div className="button dark" onClick={this.handleRemoveInnerListClick.bind(this, i)}>
                                Remove
                            </div>
                        </li>
                    </ul>
                </li>
            );
        }

        return list;

    }

    render() {

        return (
            <div className="list-option">
                <ul>
                    {this.list()}
                </ul>
                <div className="button dark" onClick={this.handleAddListClick}>Add</div>
            </div>
        );
    }

}