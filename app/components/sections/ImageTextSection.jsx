/**
 * Created by Peter on 27/08/2016.
 */
'use strict';

import React from 'react';

export default class ImageTextSection extends React.Component {

    static propTypes = {
        //standard
        index: React.PropTypes.number,
        selectedObjectKey: React.PropTypes.number,
        transparency: React.PropTypes.string,
        caption: React.PropTypes.string,

        //component specific
        size: React.PropTypes.string,
        bgImageURL: React.PropTypes.string,
        siteURL: React.PropTypes.string,

        //functions
        onSectionClick: React.PropTypes.func
    };

    handleClick = () => {
        this.props.onSectionClick(this.props.index);
    };


    caption(){
        if(this.props.caption != ''){
            return (
                <p className="section-image-text-caption">{this.props.caption}</p>
            );
        }
    }

    render(){

        //create classes and style
        var classNames = "multisection-section section-image col-sm-6 " + this.props.size;
        if(this.props.index == this.props.selectedObjectKey){
            classNames += ' selected';
        }

        //if transparency isn't set then set default
        var transparency;
        if(this.props.transparency == ''){
            transparency = '0.6';
        } else {
            transparency = this.props.transparency;
        }

        var OverlayStyles = {
            backgroundColor: "rgba(0,0,0," + transparency + ")"
        };

        //Check to see if the image url provided has https? if so don't prepend site URL
        var imageURL;
        if(this.props.bgImageURL.match(/https?:\/\//)) {
            imageURL = this.props.bgImageURL;
        } else {
            imageURL = this.props.siteURL + this.props.bgImageURL;
        }

        var styles ={
            backgroundImage: 'url(' + imageURL + ')'
        };

        return(
            <section className={classNames} style={styles}>
                <div className="select-overlay" onClick={this.handleClick}>
                    <div className="center-flex-item"> Click to Edit</div>
                </div>
                <div className="multisection-section-overlay l-table" style={OverlayStyles}>
                    <div className="l-table-row">
                        <div className="l-table-cell">
                            <div className="section-image-text-container">
                                {this.caption()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
