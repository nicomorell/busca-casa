import "./ResultsMap.scss";
import { useState } from "react";
import HorizontalListing from "../HorizontalListing/HorizontalListing"
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { useHistory } from "react-router";

export default function ResultsMap(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;



  const listings = [
    {
      title: "Apartmentamento Avenida Winston Churchill",
      area: 60,
      defaultImage: "https://media.istockphoto.com/photos/home-with-blue-siding-and-stone-faade-on-base-of-home-picture-id1272128530?b=1&k=20&m=1272128530&s=170667a&w=0&h=k9lT5-DEmkmehDb-EKRHoP1-op2DTgz4ibiWGXmj7h8=",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam augue. Proin commodo efficitur lectus, sed laoreet sapien tristique sit amet. Proin eu pharetra elit. Cras malesuada, sem eu efficitur dapibus, sapien elit semper purus, feugiat tempus erat erat vel dui. Nam magna nulla, sodales nec felis eu, pulvinar auctor sapien",
      bedrooms: 2,
      furnished: "Si",
      address: "Julieta Morales",
      price: "720",
      coordinates: [18.458782, -69.926112],
    },
    {
      title: "Casa Villa Mella",
      area: 24,
      defaultImage: "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam augue. Proin commodo efficitur lectus, sed laoreet sapien tristique sit amet. Proin eu pharetra elit. Cras malesuada, sem eu efficitur dapibus, sapien elit semper purus, feugiat tempus erat erat vel dui. Nam magna nulla, sodales nec felis eu, pulvinar auctor sapien",
      bedrooms: 4,
      furnished: "Si",
      address: "Villa Mella",
      price: "450",
      coordinates: [18.461166, -69.944607],

    },
    {
      title: "Excelente, moderno apartamento",
      area: 79,
      defaultImage: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gingerbread-house2-4f4ce25.jpg?quality=90&resize=504,458?quality=90&resize=504,458",
      description: "Lorem ipsum dolo",
      bedrooms: 1,
      furnished: "No",
      address: "Evaristo Morales",
      price: "900",
      coordinates: [18.445239, -69.939161],
    },
    {
      title: "Apartmentamento Avenida Winston Churchill",
      area: 60,
      defaultImage: "https://media.istockphoto.com/photos/home-with-blue-siding-and-stone-faade-on-base-of-home-picture-id1272128530?b=1&k=20&m=1272128530&s=170667a&w=0&h=k9lT5-DEmkmehDb-EKRHoP1-op2DTgz4ibiWGXmj7h8=",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam augue. Proin commodo efficitur lectus, sed laoreet sapien tristique sit amet. Proin eu pharetra elit. Cras malesuada, sem eu efficitur dapibus, sapien elit semper purus, feugiat tempus erat erat vel dui. Nam magna nulla, sodales nec felis eu, pulvinar auctor sapien",
      bedrooms: 2,
      furnished: "Si",
      address: "Julieta Morales",
      price: "720",
      coordinates: [18.473043, -69.930112],
    },
    {
      title: "Casa Villa Mella",
      area: 24,
      defaultImage: "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam augue. Proin commodo efficitur lectus, sed laoreet sapien tristique sit amet. Proin eu pharetra elit. Cras malesuada, sem eu efficitur dapibus, sapien elit semper purus, feugiat tempus erat erat vel dui. Nam magna nulla, sodales nec felis eu, pulvinar auctor sapien",
      bedrooms: 4,
      furnished: "Si",
      address: "Villa Mella",
      price: "450",
      coordinates: [18.488582, -69.940851],
    },
    {
      title: "Excelente, moderno apartamento",
      area: 79,
      defaultImage: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gingerbread-house2-4f4ce25.jpg?quality=90&resize=504,458?quality=90&resize=504,458",
      description: "Lorem ipsum dolo",
      bedrooms: 1,
      furnished: "No",
      address: "Evaristo Morales",
      price: "900",
      coordinates: [18.499769, -69.904342],

    },
    {
      title: "Apartmentamento Avenida Winston Churchill",
      area: 60,
      defaultImage: "https://media.istockphoto.com/photos/home-with-blue-siding-and-stone-faade-on-base-of-home-picture-id1272128530?b=1&k=20&m=1272128530&s=170667a&w=0&h=k9lT5-DEmkmehDb-EKRHoP1-op2DTgz4ibiWGXmj7h8=",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam augue. Proin commodo efficitur lectus, sed laoreet sapien tristique sit amet. Proin eu pharetra elit. Cras malesuada, sem eu efficitur dapibus, sapien elit semper purus, feugiat tempus erat erat vel dui. Nam magna nulla, sodales nec felis eu, pulvinar auctor sapien",
      bedrooms: 2,
      furnished: "Si",
      address: "Julieta Morales",
      price: "720",
      coordinates: [18.478558, -69.913690],

    },
    {
      title: "Casa Villa Mella",
      area: 24,
      defaultImage: "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam augue. Proin commodo efficitur lectus, sed laoreet sapien tristique sit amet. Proin eu pharetra elit. Cras malesuada, sem eu efficitur dapibus, sapien elit semper purus, feugiat tempus erat erat vel dui. Nam magna nulla, sodales nec felis eu, pulvinar auctor sapien",
      bedrooms: 4,
      furnished: "Si",
      address: "Villa Mella",
      price: "450",
      coordinates: [18.478258, -69.913650],

    },
    {
      title: "Excelente, moderno apartamento",
      area: 79,
      defaultImage: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gingerbread-house2-4f4ce25.jpg?quality=90&resize=504,458?quality=90&resize=504,458",
      description: "Lorem ipsum dolo",
      bedrooms: 1,
      furnished: "No",
      address: "Evaristo Morales",
      price: "900",
      coordinates: [18.478578, -69.913553],
    }
  ];
  const position = [18.478578, -69.913553]

  return (
    <div>
    <MapContainer center={[18.483402, -69.9312]} zoom={14}>
      <TileLayer 
        name="OpenStreetMap.HOT"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
        url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        attributionControl = "false"
      />
        <TileLayer 
        name="OpenStreetMap.HOT"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
        url="http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png"
        attributionControl = "false"
      />
      
      {listings &&
                  listings.map((listing, index) => {
                  return <Marker position={listing.coordinates} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}> <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup></Marker>
                  })
                }

    </MapContainer>
  </div>
  );
}
