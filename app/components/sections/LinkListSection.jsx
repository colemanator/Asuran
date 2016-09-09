/**
 * Created by Peter on 27/08/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

var LinkListSection = React.createClass({

    propTypes:{
        //standard
        index: React.PropTypes.number,
        selectedObjectKey: React.PropTypes.number,

        //Component specific
        size: React.PropTypes.string,
        colors: React.PropTypes.string,
        linkColor: React.PropTypes.string,
        //unfortunately
        highlightColor: React.PropTypes.string,
        list: React.PropTypes.array,
        title: React.PropTypes.string,

        //functions
        onSectionClick: React.PropTypes.func
    },

    handleClick(){
        this.props.onSectionClick(this.props.index);
    },

    title(){
        if(this.props.title){

            var classNames = 'divider' + this.props.highlightColor;

            return(
                <div>
                    <h5 className='section-title-text-heading'>{this.props.title}</h5>
                    <div className={classNames}>&nbsp;</div>
                </div>
            );
        }
    },

    list(){
        if(this.props.list.length > 0){

            var listArray = [];

            for(let i = 0; i < this.props.list.length; i++){
                listArray.push(
                    <li key={i}>
                        <h5 className='section-link-list-item'>
                            <a href={this.props.list[i].href} className='link-list-anchor'>
                                <div className='arrow-icon-char'></div>
                                <div className='link-list-anchor-text'>{this.props.list[i].text}</div>
                            </a>
                        </h5>
                    </li>
                );
            }
            return listArray;
        }
    },

    render(){

        var classNames = "multisection-section section-link-list col-sm-6 " + this.props.size + ' ' + this.props.colors;
        if(this.props.index == this.props.selectedObjectKey){
            classNames += ' selected';
        }

        var tableStyles = {};
        if(this.props.title){
            tableStyles.verticalAlign = 'top';
        }

        return(
            <section className={classNames}>
                <div className="select-overlay" onClick={this.handleClick}>
                    <div className="center-flex-item"> Click to Edit</div>
                </div>
                <div className="l-table">
                    <div className="l-table-row">
                        <div className="l-table-cell" style={tableStyles}>
                            <div className="section-link-list-container">
                                {this.title()}
                                <ul className={this.props.linkColor}>
                                    {this.list()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

});

export {LinkListSection};
