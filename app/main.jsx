/**
 * Created by Peter on 15/07/2016.
 */
'use strict';

require('/Users/Peter/PhpstormProjects/Asuran/client/less/main.less');

import React from 'react';
import {render} from 'react-dom';
import {App} from '../app/App.jsx'
import {Sections} from '../app/sectionsDelegate';

var testObject = Object.create(Sections);

testObject.init();

render(React.createElement(App,{sectionsObject: testObject, selectedObjectKey: 0}),document.getElementById('app'));

testObject.import('{ "version": 0.1, "sections": [ { "id": "title-text", "size": "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3", "title": "Welcome", "text": "Step into the Loft. Here at Loft Realty, we understand just how difficult and overwhelming it can be even looking for a house - let alone buying one. We pride ourselves on making the process as easy on you as we possibly can. Our agents are with you every step of the way - we won’t leave your side until after the closing papers are signed. When you think Real Estate, think Loft Realty.", "colors": "theme-colors", "highlight-color": "brand-bg" }, { "id": "button-link", "size": "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3", "bgImageUrl": "/wp-content/uploads/2015/01/8009906473_81da7b8652_o-e1420495660219.jpg", "caption": "Looking For a Property To Rent", "href": "/listings/", "buttonText": "Recent listings" }, { "id": "link-list", "size": "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3", "colors": "brand-bg brand-style-fg", "list": [ { "text": "Contact us", "href": "/offcanvas_form/?location=agency_contact" }, { "text": "Application form", "href":"/offcanvas_form/?location=sales_appraisal" }, { "text": "Open to inspect", "href": "/openhomes/?type=ofi" }, { "text": "Request a rental appraisal", "href": "/offcanvas_form/?location=rental_appraisal" }, { "text": "About us", "href": "/agency/loft-realty" } ] }, { "id": "agency-details", "size": "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3", "agencyId": [-1], "title": "Contact us", "colors": "header-colors" }, { "id": "agency-map", "size": "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3", "postId": 1522, "markerColor": "#ffd825" }, { "id": "button-link", "size": "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3", "href": "/offcanvas_form/?location=newsletter", "buttonText": "Pick one up today", "caption": "Haven\'t received our latest newsletter? Don\'t worry, we saved you a copy", "bgImageUrl": "/wp-content/uploads/2015/01/square.jpg" }, { "id": "image", "size": "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3", "bgImageUrl": "/wp-content/uploads/2015/01/3123004665_5cd4f1eafc_o.jpg" }, { "id": "listing-slider", "size": "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3", "count": 5, "type": "Any", "saleOrRental": "Both", "featured": false, "status": "Available" }, { "id": "image-text", "size": "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3", "caption": "The greatest real estate on earth #bombdiggity", "bgImageUrl": "http://lorempixel.com/500/500/city/2/" }, { "id": "staff-locator", "size": "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3", "agencyId": false, "title": "Find an agent", "highlight-color": "brand-fg" }, { "id": "testimonials", "size": "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3", "count": 5, "colors": "header-colors" }, { "id": "video-link", "size": "col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-ws-3", "caption": "Take a tour of this fabulous beach front family home", "href": "https://www.youtube.com/watch?v=N13uSk0QSC0", "bgImageUrl": "/wp-content/uploads/2014/06/kitchen-felix.png" } ] }');

console.log(testObject);

console.log(testObject.export());