import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function Maps(maps) {
    const { isLoaded } = maps
    const containerStyle = {
        width: '100%',
        height: '450px'
    };


    const center = {
        lat: 38.746,
        lng: 35.530
    };
    return isLoaded && (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            <Marker position={center}></Marker>
        </GoogleMap>
    )
}


export default Maps