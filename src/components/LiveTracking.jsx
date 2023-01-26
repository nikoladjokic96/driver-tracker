import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Vehicles from './Vehicles'
import { iconBlack, iconGreen } from './TruckIcon'
import MarkerClusterGroup from 'react-leaflet-cluster'

// import {
//   MapContainer,
//   TileLayer,
//   useMap,
//   Marker,
// } from 'https://cdn.esm.sh/react-leaflet'

const trucks = [
  {
    id: 1,
    isDriving: true,
    name: 'Abdel Bey',
    color: 'green',
    speed: '50km/h',
    vehicleNumber: '21ab-2323',
    long: 50.51,
    lat: 13.38,
  },
  {
    id: 2,
    isDriving: false,
    name: 'Andrew Tate',
    color: 'black',
    speed: '0km/h',
    vehicleNumber: '21bb-5551',
    long: 53.51,
    lat: 10.38,
  },
  {
    id: 3,
    isDriving: true,
    name: 'Davis Salinas',
    color: 'green',
    speed: '68km/h',
    vehicleNumber: '123l-0001',
    long: 46.51,
    lat: 17.38,
  },
  {
    id: 4,
    isDriving: true,
    name: 'Mark Mcelrath',
    color: 'green',
    speed: '65km/h',
    vehicleNumber: '12lj-6541',
    long: 45.51,
    lat: 10.38,
  },
  {
    id: 5,
    isDriving: false,
    name: 'Stacy Okungbowa',
    color: 'black',
    speed: '0km/h',
    vehicleNumber: '01ki-6541',
    long: 47.51,
    lat: 12.38,
  },
  {
    id: 6,
    isDriving: false,
    name: 'Kinter Defay',
    color: 'black',
    speed: '0km/h',
    vehicleNumber: '12lo-9004',
    long: 48.51,
    lat: 15.38,
  },
  {
    id: 7,
    isDriving: true,
    name: 'David Neri',
    color: 'green',
    speed: '66km/h',
    vehicleNumber: '09jk-1053',
    long: 49.51,
    lat: 18.38,
  },
]

const LiveTracking = () => {
  const position = [52.51, 13.38]
  const [allItems, setItems] = useState(trucks)
  const searchItems = (value) => {
    if (!value) {
      setItems(trucks)
      return
    }
    const filteredItems = allItems.filter((item) =>
      item.vehicleNumber.includes(value)
    )
    setItems(filteredItems)
  }
  return (
    <section className="map-component">
      <div className="map" id="map">
        <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // --- (7) Alternative map style (attribution and url copied from the leaflet extras website) ---
            // attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            // url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
            // --- -------------------------------------------------------------------------------------- ---
          />
          <MarkerClusterGroup>
            {allItems.map((truck) => (
              <Marker
                position={[truck.long, truck.lat]}
                icon={truck.isDriving ? iconGreen : iconBlack}
              >
                <Popup>{truck.name}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
          {/* 
      <MarkerClusterGroup>
        <Marker position={[49.8397, 24.0297]} />
        <Marker position={[52.2297, 21.0122]} />
        <Marker position={[51.5074, -0.0901]} />
      </MarkerClusterGroup> */}
        </MapContainer>
      </div>
      <Vehicles trucks={allItems} searchItems={searchItems}/>
    </section>
  )
}

export default LiveTracking
