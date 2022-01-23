import "./ResultsList.scss";
import { useState } from "react";
import HorizontalListing from "../HorizontalListing/HorizontalListing"

import { useHistory } from "react-router";

export default function ResultsList(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    }
  ];

  return (
    <div className="">

      {listings &&
        listings.map((listing, listingIndex) => {
          return (
            <HorizontalListing
              className="justify-content-between"
              onClick={() => console.log("TEST")}
              listingItem={listing}
            > 
</HorizontalListing>
          );
        })}
    </div>
  );
}
