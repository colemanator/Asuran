/**
 * Created by Peter on 29/09/2016.
 */
'use strict';

import {Map, List} from 'immutable'

const defaultObjects = Map({
    'agency-details': {
        id: 'agency-details',
        size: 'col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3',
        colour: ' brand-bg brand-style-fg'
    },
    'empty': {
        id: 'empty'
    },
    'button-link': {
        id: "button-link",
        size: "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3",
        bgImageUrl: "/wp-content/uploads/2015/01/8009906473_81da7b8652_o-e1420495660219.jpg",
        caption: "Looking For a Property To Rent",
        target: '_blank',
        href: "/listings/",
        buttonText: "Recent listings",
        transparency: '0.5'
    },
    'image': {
        id: "image",
        size: "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3",
        bgImageUrl: "http://lorempixel.com/500/500/city/2/"
    },
    'image-text': {
        id: "image-text",
        size: "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3",
        caption: "The greatest real estate on earth #bombdiggity",
        transparency: "0.6",
        bgImageUrl: "http://lorempixel.com/500/500/city/2/"
    },
    'link-list': {
        id: "link-list",
        size: "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3",
        colors: "brand-bg brand-style-fg",
        "link_color": "black",
        "heighlight-color": "",
        title: "SiteLoft",
        list: List([
            Map({
                text: "Contact us",
                href: "/offcanvas_form/?location=agency_contact"
            }),
            Map({
                text: "Application form",
                href: "/offcanvas_form/?location=sales_appraisal"
            }),
            Map({
                text: "Open to inspect",
                href: "/openhomes/?type=ofi"
            }),
            Map({
                text: "Request a rental appraisal",
                href: "/offcanvas_form/?location=rental_appraisal"
            }),
            Map({
                text: "About us",
                href: "/agency/loft-realty"
            })
        ])
    },
    'agency-map': {
        id: "agency-map",
        size: "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3",
        noDefault: ""
    }
});

export default function defautObjects(state = defaultObjects, action){
    return state;
}
