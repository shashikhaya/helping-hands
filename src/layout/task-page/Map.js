import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lng: -1.8904,
  lat: 52.4862
};

function Map({userCoords,taskCoords}) {
  return (
    <LoadScript
      googleMapsApiKey="PUT IN A KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center= {{lat:userCoords[0],lng:userCoords[1]}} //{center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
          <Marker position={{lat:userCoords[0],lng:userCoords[1]}} />
          <Marker position={{lat:taskCoords[0],lng:taskCoords[1]}} />
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)