import "./Inbox.scss";
import { useState, useEffect, useRef } from "react";
import $ from "jquery";
import Phone from "../../assets/phone.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import _indexOf from "lodash/indexOf";
import Favourite from "../../assets/favourite.svg";
import { ReactComponent as ChevronRight } from "../../assets/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../../assets/chevron-left.svg";
//import Fancybox from "./fancybox.js";
import { views } from "../../helpers/app-views";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Inbox(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;
  var pictures = [
    "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
    "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    "https://ichef.bbci.co.uk/news/999/cpsprodpb/6D5A/production/_119449972_10.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2014/01/animal-children-photography-elena-shumilova-2.jpg",
    "https://media.soulandspiritmagazine.com/wp-content/uploads/2015/04/31110442/omg-cute-things-112912_08.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
  ];
  var [pictureIndex, setPictureIndex] = useState(0);
  const [changeNavbar, setChangeNavbar] = useState(false);
  const [mainImage, setMainImage] = useState(pictures[0]);
  const [currentUser, setCurrentUser] = useState(1);
  const [view, setView] = useState(views.GALLERY);

  var properties = [
    {
      name: "Casa Villa Mella",
      message: "This is one of the messages of the chat",
      picture:
        "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
    },
    {
      name: "Casa Villa Mella",
      message: "This is one of the messages of the chat",
      picture:
        "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
    },
    {
      name: "Casa Villa Mella",
      message: "This is one of the messages of the chat",
      picture:
        "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
    },
    {
      name: "Casa Villa Mella",
      message: "This is one of the messages of the chat",
      picture:
        "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
    },
  ];
  const swiperRef = useRef(null);

  const [swiper, setSwiper] = useState(null);
  const toSlide = (listing) => {
    swiperRef.current?.swiper.slideTo(_indexOf(pictures, listing));
  };
  const slideTo = (index) => swiper.slideTo(3);
  var images = [];
  var messages = [
    {
      name: "Nico",
      id: "1",
      message: "This is one of the messages of the chat",
      picture:
        "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
      time: "28/04/2022 20:16",
    },
    {
      name: "Agente",
      id: "99",
      message: "This is one of the messages of the chat",
      picture:
        "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
      time: "28/04/2022 20:16",
    },
    {
      name: "Nico",
      id: "1",
      message: "This is one of the messages of the chat",
      picture:
        "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
      time: "28/04/2022 20:16",
    },
    {
      name: "Agente",
      id: "99",
      message: "This is one of the messages of the chat",
      picture:
        "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
      time: "28/04/2022 20:16",
    },
  ];
  return (
    <>
      <div className="main-gallery_container">
        <div className="left-panel">
          <div className="image-grid_container">
            {properties.map((property, index) => {
              return (
                <div class="message-container">
                  <img src={property.picture}></img>
                  <div className="text-container">
                    <div>{property.name}</div>
                    <span>{property.message}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-panel">
          <div className="main-conversation">
            {messages.map((message, index) => {
              return [
                message.id == currentUser ? (
                  <div className={`message-container r-a`}>
                    <div className = "text-message">{message.message}</div>
                    <div className="lower-message_container">
                      <div>{message.time}</div>
                      <div>{message.name}</div>
                      <img src={message.picture} />
                    </div>
                  </div>
                ) : (
                  <div className={`message-container l-a`}>
                    <div className = "text-message">{message.message}</div>
                    <div className="lower-message_container">
                      <img src={message.picture} />
                      <div>{message.name}</div>
                      <div>{message.time}</div>
                    </div>
                  </div>
                ),
              ];
            })}
          </div>
        </div>
        <div className="image-button_container"></div>
      </div>
    </>
  );
}
