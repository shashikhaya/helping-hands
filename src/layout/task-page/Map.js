// docs : https://react-google-maps-api-docs.netlify.app/
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
  justify: 'center'
};



function MyComponent({userCoords,taskCoords}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDD9SFkGe-a_3ZltYX8xp7jC3B3jfqHeBo"
  })

  const [map, setMap] = React.useState(null)
  
  // function to calculate center point for map ( abs sum of lat/2 & lng/2)
  const getCenter = () =>{
    const lat = Math.abs(userCoords[0],taskCoords[0])/2
    const lng = (userCoords[1]+taskCoords[1])/2
    return {"lat":lat,"lng":lng}
  }

  // const [center,setCenter]=React.useState(getCenter)



  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    console.log(bounds)
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        defaultCenter={{lat:userCoords[0],lng:userCoords[1]}}
        center= {{lat:userCoords[0],lng:userCoords[1]}} //{{lat:userCoords[0],lng:userCoords[1]}}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
          <Marker position={{lat:userCoords[0],lng:userCoords[1]}} />
          <Marker position={{lat:taskCoords[0],lng:taskCoords[1]}} />
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)