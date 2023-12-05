import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
import { data } from "../data/data.js";
import { colors } from '@mui/material';

function Maps(maps) {
    const { isLoaded } = maps
    const containerStyle = {
        width: '100%',
        height: '200px',
        borderRadius: '8px',
        // borderBottomLeftRadius: '8px',
        // borderBottomRightRadius: '8px',
    };

    const center = {
        lat: 38.746,
        lng: 35.530
    };

    return isLoaded && (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            options={{
                mapTypeId: 'terrain',
            }}
        >
            <Marker></Marker>
        </GoogleMap>
    )
}


export default Maps