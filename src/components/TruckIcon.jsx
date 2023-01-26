import L from 'leaflet'

const iconGreen = new L.Icon({
  iconUrl: require('../img/icon-green.png'),
  iconRetinaUrl: require('../img/icon-green.png'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: 'leaflet-div-green-icon',
})
const iconBlack = new L.Icon({
  iconUrl: require('../img/icon-black.png'),
  iconRetinaUrl: require('../img/icon-black.png'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: 'leaflet-div-black-icon',
})

export { iconBlack, iconGreen }
