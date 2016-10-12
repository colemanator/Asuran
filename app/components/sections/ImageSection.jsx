/**
 * Created by Peter on 22/08/2016.
 */
'use strict';

import React from 'react';

export default class ImageSection extends React.Component {

    static propTypes = {
        //standard
        index: React.PropTypes.number,
        selectedObjectKey: React.PropTypes.number,

        //component specific
        size: React.PropTypes.string,
        bgImageUrl: React.PropTypes.string,
        siteURL: React.PropTypes.string,

        //functions
        onSectionClick: React.PropTypes.func
    };

    handleClick = () => {
        this.props.onSectionClick(this.props.index);
    };

    render(){


        //create classes and style
        var classNames = "multisection-section section-image col-sm-6 " + this.props.size;
        if(this.props.index == this.props.selectedObjectKey){
            classNames += ' selected';
        }

        var imageURL;
        if(this.props.bgImageUrl.match(/https?:\/\//)) {
            imageURL = this.props.bgImageUrl;
        } else {
            imageURL = this.props.siteURL + this.props.bgImageUrl;
        }

        var styles ={
            backgroundImage: 'url(' + imageURL + ')'
        };

        return(
            <section className={classNames} style={styles}>
                <div className="select-overlay" onClick={this.handleClick}>
                    <div className="center-flex-item"> Click to Edit</div>
                </div>
            </section>
        );
    }
}
