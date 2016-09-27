/**
 * Created by Peter on 11/08/2016.
 */
'use strict';

import React from 'react';

export default class HeaderContainer extends React.Component {

    static propTypes = {
        siteURL: React.PropTypes.string,

        //functions
        onSiteURLChange: React.PropTypes.func,
        onImportClick: React.PropTypes.func,
        onExportClick: React.PropTypes.func
    };

    handleSiteURLChange = (event) => {
        this.props.onSiteURLChange(event.target.value);
    };

    handleImportClick = () => {
        this.props.onImportClick();
    };

    handleExportClick = () => {
        this.props.onExportClick();
    };

    /**
     * render out the header
     * @returns {XML}
     */
    render(){
        return (
            <header>
                <img src="/images/svg/sl-logo-large.svg"/>
                <div className="app-control-wrapper">
                    <div className="button" onClick={this.handleImportClick}>Import</div>
                    <div className="button" onClick={this.handleExportClick}>Export</div>
                </div>
                <div className="site-url-input-wrapper">
                    <label>Site URL</label>
                    <input type="text" defaultValue={this.props.siteURL} onChange={this.handleSiteURLChange}/>
                </div>
            </header>
        );

    }


}

export {HeaderContainer};
