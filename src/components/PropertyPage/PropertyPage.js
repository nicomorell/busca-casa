import "./PropertyPage.scss";
import { useState } from "react";
import FilterList from "../FilterList/FilterList";
import ResultsList from "../ResultsList/ResultsList";
import ResultsMap from "../ResultsMap/ResultsMap";
import Phone from "../../assets/phone.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Share from "../../assets/share.svg";
import Favourite from "../../assets/favourite.svg";
import ChevronRight from "../../assets/chevron-right.svg";
import ChevronLeft from "../../assets/chevron-left.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function ResultsPage(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  var [pictureIndex, setPictureIndex] = useState(0);
  const [password, setPassword] = useState("");
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
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
  ];
  console.log(pictureIndex);
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

        <div className="agent-information">
          <div className="main-agent-information">
            <div className="agent-chunk">
              <div className="agent-name">{agentInformation.name}</div>
              <div className="agent-profile">
                Ver propiedades del publicador
              </div>
            </div>
            <img className="agent-picture" src={agentInformation.picture}></img>
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
    </>
  );
}
