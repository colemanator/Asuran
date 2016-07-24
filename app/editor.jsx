/**
 * Created by Peter on 25/07/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

var Editor = React.createClass({

    propTypes:{
      sectionObject: React.PropTypes.object
    },

    render(){
        return (
            <div className='menu-wrapper'>
                test
                /*return a form with inputs and selections for each input avaibale on section*/
            </div>
        );

    }

});

export {Editor}

