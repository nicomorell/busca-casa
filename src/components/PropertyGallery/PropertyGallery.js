import "./PropertyGallery.scss";
import { useState, useEffect, useRef } from "react";
import $ from "jquery";
import Phone from "../../assets/phone.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import _indexOf from 'lodash/indexOf';
import Favourite from "../../assets/favourite.svg";
import ChevronRight from "../../assets/chevron-right.svg";
import ChevronLeft from "../../assets/chevron-left.svg";
//import Fancybox from "./fancybox.js";
import { views } from '../../helpers/app-views';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function PropertyGallery(props) {
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
  const [gallery, setGallery] = useState(null);
  const [view, setView] = useState(views.GALLERY);

  console.log(pictures[0])
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
  const swiperRef = useRef(null);

  const [swiper, setSwiper] = useState(null);
  const toSlide = (listing) => {
    swiperRef.current?.swiper.slideTo(_indexOf(pictures, listing));
  };
  const slideTo = (index) => swiper.slideTo(3);
  var images = [];

  return (
    <>
      <div className="main-gallery_container">
        <div className = "left-panel">
        <div className = "image-grid_container">
        {pictures.map((listing, index) => {
             
             images.push(listing);

             return (
               <div class="image-container">
                   <img       
                   onClick={() =>{ toSlide(listing)}}
                   src={listing}>
                   </img>
               </div>
             );
        })
        }  
        </div>
        </div>
        <div className ="right-panel">
        <img onClick= {() => swiperRef.current.swiper.slidePrev()} src={ChevronLeft}></img>


          <div className ="main-image_container">
          <Swiper
      // install Swiper modules
      spaceBetween={50}
      slidesPerView={1}
      ref={swiperRef}
      draggable={true}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log("swiperoo", swiper)}
      onSlideChange={() => console.log('slide change')}
    >

            {pictures.map((listing, index) => {
             return (
               <div>
              <SwiperSlide><img src={listing} /></SwiperSlide>
               </div>
             );
        })
        }
    
    </Swiper>
          </div>
        </div>
        <div className="image-button_container">
        </div>
        <img onClick= {() => swiperRef.current.swiper.slideNext()} src={ChevronRight}></img>
      </div>
    </>
  );
}
