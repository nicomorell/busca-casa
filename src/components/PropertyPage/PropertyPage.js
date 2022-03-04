import "./PropertyPage.scss";
import { useState, useEffect } from "react";
import FilterList from "../FilterList/FilterList";
import ResultsList from "../ResultsList/ResultsList";
import $ from "jquery";
import Phone from "../../assets/phone.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Share from "../../assets/share.svg";
import Favourite from "../../assets/favourite.svg";
import ChevronRight from "../../assets/chevron-right.svg";
import ChevronLeft from "../../assets/chevron-left.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ResultsPage(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  var [pictureIndex, setPictureIndex] = useState(0);
  const [changeNavbar, setChangeNavbar] = useState(false);
  const [position, setPosition] = useState(null);

  var agentInformation = {
    name: "Nicole Rodriguez",
    picture:
      "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
  };

  var pictures = [
    "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
    "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    "https://ichef.bbci.co.uk/news/999/cpsprodpb/6D5A/production/_119449972_10.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2014/01/animal-children-photography-elena-shumilova-2.jpg",
    "https://media.soulandspiritmagazine.com/wp-content/uploads/2015/04/31110442/omg-cute-things-112912_08.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
  ];

  var property = {
    title: "Casa Villa Mella",
    date: "22/02/2022",
    area: 24,
    defaultImage:
      "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam vel. Tortor consequat id porta nibh venenatis cras sed felis eget. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Est ultricies integer quis auctor elit sed vulputate mi sit. Mi proin sed libero enim sed faucibus. Etiam dignissim diam quis enim lobortis. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Et ultrices neque ornare aenean euismod elementum nisi quis. In metus vulputate eu scelerisque. A iaculis at erat pellentesque adipiscing. Odio ut sem nulla pharetra diam sit amet. Metus aliquam eleifend mi in. Turpis massa sed elementum tempus. Augue lacus viverra vitae congue. \n \n Ante metus dictum at tempor. Turpis tincidunt id aliquet risus feugiat in ante metus. Nunc sed augue lacus viverra vitae congue eu consequat. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Sit amet volutpat consequat mauris nunc congue. Viverra maecenas accumsan lacus vel facilisis volutpat. Lobortis feugiat vivamus at augue eget. Tempor id eu nisl nunc mi ipsum. Purus in mollis nunc sed id semper risus in. Odio eu feugiat pretium nibh ipsum consequat. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Nibh sed pulvinar proin gravida hendrerit lectus. Enim nec dui nunc mattis enim ut. Id consectetur purus ut faucibus. Quis lectus nulla at volutpat diam ut venenatis tellus in. Leo vel orci porta non pulvinar neque laoreet suspendisse. Mi in nulla posuere sollicitudin aliquam ultrices.\n \n Habitasse platea dictumst vestibulum rhoncus. Augue interdum velit euismod in pellentesque. Lorem donec massa sapien faucibus et molestie. Convallis tellus id interdum velit laoreet id. Tempor id eu nisl nunc mi. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Quis hendrerit dolor magna eget. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Bibendum arcu vitae elementum curabitur. Sed vulputate mi sit amet mauris commodo quis imperdiet. \n\n  mi sit amet mauris commodo quis imperdiet. mi sit amet mauris commodo quis imperdiet.",
    bedrooms: 4,
    furnished: "Si",
    address: "Villa Mella",
    price: "450",
    features: [
      "garaje",
      "piscina",
      "Seguridad 24hrs",
      "Ascensor",
      "Cuatro Habitaciones",
    ],
  };
  const changeNavbarSize = () => {
    //console.log(window.scrollY)

    const priceOffset = $(".property-information").offset();
    const navbarOffset = $(".navbar").offset()

    if(position == null) {
      setPosition(priceOffset);
    }
    if (window.scrollY > priceOffset.top -50) {
      setChangeNavbar(true)
    } else {
      setChangeNavbar(false)
    }
  }
  useEffect(() => {
    changeNavbarSize()

    // adding the event when scroll change background
    window.addEventListener("scroll", changeNavbarSize);
  });
  return (
    <>
      <div className="main-property">
        <div className="image-button_container">
          <div
            className="back-button"
            onClick={() =>
              setPictureIndex(
                pictureIndex <= 1 ? pictures.length : pictureIndex - 1
              )
            }
          >
            <img src={ChevronLeft}></img>
          </div>
          <div
            className="next-button"
            onClick={() =>
              setPictureIndex(
                pictureIndex >= pictures.length - 1 ? 0 : pictureIndex + 1
              )
            }
          >
            <img src={ChevronRight}></img>
          </div>
        </div>

        <div className="image-grid_container">
          {pictures
            .slice(pictureIndex, pictureIndex + 3)
            .concat(
              pictureIndex + 1 > pictures.length
                ? pictures.slice(
                    pictures.length - pictureIndex,
                    pictures.length
                  )
                : pictures.slice(0, pictures.length)
            )
            .map((listing, index) => {
              if (index < 3) {
                return (
                  <div class="image">
                    <img src={listing}></img>
                  </div>
                );
              }
            })}
          {pictureIndex + 3 >= pictures.length
            ? pictures
                .slice(0, pictures + 3 - pictures.length)
                .map((listing, index) => {
                  return <img src={listing}></img>;
                })
            : ""}
        </div>
        <div className="property-information">
          <div className="property-title">{property.title}</div>
          <div className="date-added">Subido: {property.date}</div>

          <div className="property-address">{property.address}</div>

          <div class="features">
          <div className="property-features">Caracteristicas</div>

            <ul>
              {property.features.map((feature, index) => {
                return <li>{feature}</li>;
              })}
            </ul>
          </div>
          <div class="description">
            {property.description}
          </div>
        </div>
        <div class="right">
          <div class={(changeNavbar ? "price-fixed" : "") +" property-price"}>{property.price}</div>
          <div className={(changeNavbar ? "price-fixed" : "")+ " agent-information"}>
            <div className="main-agent-information">
              <div className="agent-chunk">
                <div className="agent-name">{agentInformation.name}</div>
                <div className="agent-profile">
                  Ver propiedades del publicador
                </div>
              </div>
              <img
                className="agent-picture"
                src={agentInformation.picture}
              ></img>
            </div>
            <div className="horizontal-options">
              <div className="contact-number">
                <img className="contact-icon" src={Phone} />
                <span>Ver Numero</span>
              </div>
              <div className="contact-whatsapp">
                <img className="contact-icon" src={Whatsapp} />
                <span>Mandar WhatsApp</span>
              </div>
            </div>
            <div className="inlined-options">
              <div className="share-property">
                <img className="contact-icon" src={Share} />
                <span>Compartir</span>
              </div>
              <div className="like-property">
                <img className="contact-icon" src={Favourite} />
                <span>Añadir a favoritos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
