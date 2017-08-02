/*global google*/

import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps/lib";
import StyleMap from "../constants/style_map.json";

const GoogleMapComponent = withGoogleMap( props => (
    <GoogleMap
        defaultZoom={17}
        defaultCenter={ props.center }
        defaultOptions={{ styles: StyleMap, scrollwheel: false }}
    >
        <Marker
            position={{lat: 48.450210, lng: 24.557167}}
            name='Title'
        />
    </GoogleMap>
));

class Map extends Component {
    render() {
        return (
            <GoogleMapComponent
                containerElement={
                    <div style={{ height: `400px` }} />
                }
                mapElement={
                    <div style={{ height: `400px` }} />
                }
                center={ new google.maps.LatLng(48.450210, 24.557167) }
            />
        );
    }
}

export default Map;