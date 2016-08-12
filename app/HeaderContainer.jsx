/**
 * Created by Peter on 11/08/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

var HeaderContainer = React.createClass({

    propTypes:{
        siteURL: React.PropTypes.string,
    },

    render(){
        return (
          <header>
              <img src="/images/svg/sl-logo-large.svg"/>
              <div className="app-control-wrapper">
                  <div className="button">Import</div>
                  <div className="button">Export</div>
              </div>
              <div className="site-url-input-wrapper">
                  <label>Site URL</label>
                <input type="text" />
              </div>
          </header>
        );

    }

});

export {HeaderContainer};
