/**
 * Created by Peter on 9/09/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

var AgencyMapSection = React.createClass({

    render(){

        return(
            <div class="multisection-section section-agency-map {% if not section.noDefault %} col-sm-6 {% endif %} {{ section.size }}">
                <div id="home_map_canvas" style="height: 100%;"></div>
            </div>
        );
    }

});

export {AgencyMapSection};