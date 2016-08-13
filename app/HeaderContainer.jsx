/**
 * Created by Peter on 11/08/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

var HeaderContainer = React.createClass({

    propTypes:{
        siteURL: React.PropTypes.string,
        onSiteURLChange: React.PropTypes.func,
        onImportClick: React.PropTypes.func,
        onExportClick: React.PropTypes.func
    },

    render(){
        return (
          <header>
              <img src="/images/svg/sl-logo-large.svg"/>
              <div className="app-control-wrapper">
                  <div className="button" onChange={this.handleImportClick}>Import</div>
                  <div className="button" onChange={this.handleExportClick}>Export</div>
              </div>
              <div className="site-url-input-wrapper">
                  <label>Site URL</label>
                <input type="text" defaultValue={this.props.siteURL} onChange={this.handleSiteURLChange}/>
              </div>
          </header>
        );

    },

    handleSiteURLChange(event){
        this.props.onSiteURLChange(event.target.value);
    },

    handleImportClick(){
        this.props.onImportClick();
    },

    handleExportClick(){
        this.props.onExportClick();
    }


});

export {HeaderContainer};