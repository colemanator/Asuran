/**
 * Created by Peter on 17/07/2016.
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';

/**
 * Section for Agency details
 */
var agencyDetailsSection = React.createClass({

    propTypes: {
        size: React.propTypes.string,
        colour: React.propTypes.string,
        agency: React.propTypes.object
    },

    render(){

        var defaultClasses = "multisection-section section-agency-details col-sm-6 " + this.props.size + this.props.colour;

        if (this.props.agencie.length > 0) {
            return (
                <section
                    className={defaultClasses}>
                    <div class="l-table section-agency-details-table">
                        <div class="l-table-row">
                            <div class="l-table-cell">
                                <h4 class='agency-heading'>Site Loft</h4>
                                <h6 class='agency-sub-heading'>Call</h6>
                                <h5 class="agency-details-text">54989257</h5>
                                <h6 class='agency-sub-heading'>Fax</h6>
                                <h5 class="agency-details-text">8976456765</h5>
                                <h6 class='agency-sub-heading'>Email</h6>
                                <h5 class="agency-details-text"><a href='mailto: siteloft@siteloft.io'>siteloft@siteloft.io</a></h5>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }
});
