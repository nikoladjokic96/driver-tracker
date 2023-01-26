import React from 'react'
import { FaExclamation } from 'react-icons/fa'

const ListItem = (truck) => {
  return (
    <div className="vehicle">
      <div className="vehicle-header">
        <div className={`circle ${truck.isDriving ? 'online' : 'offline'}`}>
          {truck.isDriving ? 'DRV' : 'OFF'}
        </div>
        <h3>{truck.name}</h3>
      </div>
      <div className="vehicle-data">
        <p>Vehicle: {truck.vehicleNumber}</p>
        <p>{truck.speed}</p>
      </div>
    </div>
  )
}
const Vehicles = ({ trucks, searchItems }) => {
  return (
    <div className="vehicle-container">
      {' '}
      <div className="buttons-container">
        <button className="vehicles-button">Fleet</button>
        <button className="vehicles-button">Routing</button>
        <button className="vehicles-button">
          HOS
          <FaExclamation color="red" />
        </button>
      </div>
      <input
        className="search-input"
        placeholder="Search vehicle"
        onChange={(e) => searchItems(e.target.value)}
      />
      {trucks.map(ListItem)}
    </div>
  )
}

export default Vehicles
