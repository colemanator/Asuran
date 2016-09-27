/**
 * Created by Peter on 9/09/2016.
 */
'use strict';

import React from 'react';

export default class AgencyMapSection extends React.Component {

    static propTypes = {
        //standard
        index: React.PropTypes.number,
        selectedObjectKey: React.PropTypes.number,

        //component specific
        noDefault: React.PropTypes.string,
        size: React.PropTypes.string,

        //functions
        onSectionClick: React.PropTypes.func
    };

    /**
     * When Component has mounted and google is ready generate the map
     */
    componentDidMount(){
        //just in case google maps has yet to load
        this.createMap();
        this.addMarker();
        this.fitMapToMarkers();
    }

    /**
     * Add a marker to the map with custom icon (marker is just dummy data)
     */
    addMarker(){
        var iconOptions = {
            path: 'M 20.639,0C13.209,0,7.186,5.961,7.186,13.31c0,7.351,13.453,27.047,13.453,27.047S34.092,20.662,34.092,13.31 C34.092,5.959,28.07,0,20.639,0z M20.639,19.218c-3.297,0-5.971-2.645-5.971-5.906c0-3.264,2.673-5.908,5.971-5.908 c3.298,0,5.97,2.645,5.97,5.908C26.61,16.573,23.938,19.218,20.639,19.218 z',
            fillColor: '#ffdd20',
            fillOpacity: 1,
            scale: 1,
            strokeOpacity: 1,
            strokeWeight: 0.5,
            anchor: new google.maps.Point(21, 40.5),
        };

        //dummy data
        var latLng = {
            lat: -27.4528007,
            lng: 153.0463279
        };

        this.markers.push(new google.maps.Marker({
            position: new google.maps.LatLng(latLng.lat, latLng.lng),
            map: this.map,
            icon: iconOptions
        }));
    }


    /**
     * create a google map
     */
    createMap(){
        this.map = new google.maps.Map(document.getElementById('home_map_canvas'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });

        this.markers = [];

        google.maps.event.addDomListener(window, 'resize', function () {
            this.fitMapToMarkers();
        }.bind(this));
    }

    /**
     * fit map to the bounds of the marker
     */
    fitMapToMarkers() {
        if (this.map instanceof google.maps.Map) {
            //create new bounds
            var bounds = new google.maps.LatLngBounds();


            for (var i = 0; i < this.markers.length; i++) {
                bounds.extend(this.markers[i].getPosition());
            }

            //center the map to the geometric center of all markers
            this.map.setCenter(bounds.getCenter());

            //fitBounds is async so we add an event listener - Adjust Zoom appropriately
            google.maps.event.addListenerOnce(this.map, 'bounds_changed', function () {
                //to ensure markers aren't on the edge
                //map.setZoom(map.getZoom()); - doesn't appear to be needed

                //if There is only one marker set zoom to default
                if (this.map.getZoom() > 15 && this.markers.length == 1) {
                    this.map.setZoom(15);
                }
            }.bind(this));

            this.map.fitBounds(bounds);
        }
    }

    handleClick = () => {
        this.props.onSectionClick(this.props.index);
    };

    render(){

        var classNames = 'multisection-section section-agency-map ';
        classNames += this.props.size;

        if(this.props.index == this.props.selectedObjectKey){
            classNames += ' selected';
        }

        if(this.props.noDefault != ''){
            classNames += ' col-sm-6';
        }

        return(
            <section className={classNames}>
                <div className="select-overlay" onClick={this.handleClick}>
                    <div className="center-flex-item"> Click to Edit </div>
                </div>
                <div id="home_map_canvas" style={{height: '100%'}}></div>
            </section>
        );
    }

}