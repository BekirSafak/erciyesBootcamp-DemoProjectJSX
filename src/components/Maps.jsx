import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { data } from "../data/data.js";
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet';

function Maps() {

    const mapRef = useRef()
    const ZOOM_LEVEL = 16
    const customMarkerIcon = new Icon({
        iconUrl: require('../assets/marker.png'),
        iconSize: [38, 38]
    });


    const { id } = useParams();
    let locationsID = data.find(q => q.id == id)
    console.log(locationsID)
    console.log(id)

    return (
        <MapContainer center={locationsID.location} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={locationsID.location} icon={customMarkerIcon}></Marker>
        </MapContainer>

    )
}


export default Maps


