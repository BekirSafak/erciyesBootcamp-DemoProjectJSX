import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
import { data } from "../data/data.js";
import { colors } from '@mui/material';

function Maps(maps) {
    const { isLoaded } = maps
    const containerStyle = {
        width: '100%',
        height: '450px'
    };

    const { id } = useParams();
    let locationsID = data.find(q => q.id == id)
    console.log(locationsID)
    console.log(id)

    // const center = {
    //     lat: 38.746,
    //     lng: 35.530
    // };
    return isLoaded && (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={locationsID.location}
            zoom={10}
        >
            <Marker position={locationsID.location}></Marker>
        </GoogleMap>
    )
}


export default Maps