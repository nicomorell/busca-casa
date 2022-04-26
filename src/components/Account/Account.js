import "./Account.scss";
import { useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import Heart from "../../assets/heart.svg";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import Bedrooms from "../../assets/bedrooms.svg";
import Furnished from "../../assets/furnished.svg";
import Calendar from "../../assets/calendar.svg";
import SquaredMeters from "../../assets/squared-meters.svg";

import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as WhatsApp } from "../../assets/whatsapp.svg";
import ListItem from "@mui/material/ListItem";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { RadioGroup } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { views } from "../../helpers/app-views";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";

export default function Account(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [userInformation, setUserInformation] = useState(null);
  const [accordionFilters, setAccordionFilters] = useState([
    "saved",
    "listings",
    "statistics",
  ]);

  const listings = [
    {
      title: "Apartmentamento Avenida Winston Churchill",
      area: 60,
      defaultImage:
        "https://media.istockphoto.com/photos/home-with-blue-siding-and-stone-faade-on-base-of-home-picture-id1272128530?b=1&k=20&m=1272128530&s=170667a&w=0&h=k9lT5-DEmkmehDb-EKRHoP1-op2DTgz4ibiWGXmj7h8=",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam augue. Proin commodo efficitur lectus, sed laoreet sapien tristique sit amet. Proin eu pharetra elit. Cras malesuada, sem eu efficitur dapibus, sapien elit semper purus, feugiat tempus erat erat vel dui. Nam magna nulla, sodales nec felis eu, pulvinar auctor sapien",
      bedrooms: 2,
      furnished: "Si",
      address: "Julieta Morales",
      price: "720",
    },
    {
      title: "Casa Villa Mella",
      area: 24,
      defaultImage:
        "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam augue. Proin commodo efficitur lectus, sed laoreet sapien tristique sit amet. Proin eu pharetra elit. Cras malesuada, sem eu efficitur dapibus, sapien elit semper purus, feugiat tempus erat erat vel dui. Nam magna nulla, sodales nec felis eu, pulvinar auctor sapien",
      bedrooms: 4,
      furnished: "Si",
      address: "Villa Mella",
      price: "450",
    },
    {
      title: "Excelente, moderno apartamento",
      area: 79,
      defaultImage:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gingerbread-house2-4f4ce25.jpg?quality=90&resize=504,458?quality=90&resize=504,458",
      description: "Lorem ipsum dolo",
      bedrooms: 1,
      furnished: "No",
      address: "Evaristo Morales",
      price: "900",
    },
    {
      title: "Apartmentamento Avenida Winston Churchill",
      area: 60,
      defaultImage:
        "https://media.istockphoto.com/photos/home-with-blue-siding-and-stone-faade-on-base-of-home-picture-id1272128530?b=1&k=20&m=1272128530&s=170667a&w=0&h=k9lT5-DEmkmehDb-EKRHoP1-op2DTgz4ibiWGXmj7h8=",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam augue. Proin commodo efficitur lectus, sed laoreet sapien tristique sit amet. Proin eu pharetra elit. Cras malesuada, sem eu efficitur dapibus, sapien elit semper purus, feugiat tempus erat erat vel dui. Nam magna nulla, sodales nec felis eu, pulvinar auctor sapien",
      bedrooms: 2,
      furnished: "Si",
      address: "Julieta Morales",
      price: "720",
    }
  ];
  const [view, setView] = useState(views.SETTINGS);

  const navigate = useNavigate();
  useEffect(() => {
    setUserInformation({
      first_name: "Nicolas",
      last_name: "Morell",
      email: "nicomorell1@hotmail.com",
      telephone: "+1 849 274 3502",
    });
  }, []);
  const handleChange = (event) => {};
  console.log(accordionFilters);
  return (
    <div className="account-wrapper">
      <div class="top-information">
        <h1>Buenas Tardes, {userInformation && userInformation.first_name} </h1>
      </div>
      <div className="panel-wrapper">
        <div className="left-panel">
          <FormControl fullWidth>
            <Accordion
              className="accordion"
              expanded={accordionFilters.includes("saved")}
            >
              <AccordionSummary
                onClick={() =>
                  accordionFilters.indexOf("saved") == -1
                    ? setAccordionFilters((accordionFilters) => [
                        ...accordionFilters,
                        "saved",
                      ])
                    : setAccordionFilters(
                        accordionFilters.filter((word) => word !== "saved")
                      )
                }
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="accordion-title_wrapper">
                  <img src={Heart}></img>
                  <div className="accordion-title">Propiedades Guardadas</div>
                </div>
              </AccordionSummary>
              <AccordionDetails className="block">
                <div className="properties-saved">
                  <div className="empty">
                    <img src={Heart}></img>
                    <p className="bold">No tienes ninguna propiedad guardada</p>
                    <p>
                      {" "}
                      Haz clic en el corazon de una propiedad para guardar tus
                      propiedades favoritas y encuentralas aqui mas tarde.
                    </p>
                    <div className="search-properties">Buscar</div>
                  </div>
                </div>
                <div className="saved-wrapper">
                  {listings &&
                    listings.map((listing, listingIndex) => {
                      return (
                        <div className="saved-container">
                          <div className = "image-container">
                            <img src = {listing.defaultImage} />
                            </div>
                          <p>{listing.address}</p>
                          <div className="lower-information">
                            <div>
                              <img
                                className="sidebar-icon"
                                alt="billing icon"
                                src={SquaredMeters}
                              />
                              <span>{listing.area}m&#178;;</span>
                            </div>
                            <div>
                              <img
                                className="sidebar-icon"
                                alt="billing icon"
                                src={Bedrooms}
                              />
                              <span>{listing.bedrooms}</span>
                            </div>
                            <div>
                              <img
                                className="sidebar-icon"
                                alt="billing icon"
                                src={Furnished}
                              />
                              <span>{listing.furnished}</span>
                            </div>
                          </div>
                          <span>{listing.price}</span>

                        </div>
                      );
                    })}
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="accordion"
              expanded={accordionFilters.includes("saved")}
            >
              <AccordionSummary
                onClick={() =>
                  accordionFilters.indexOf("saved") == -1
                    ? setAccordionFilters((accordionFilters) => [
                        ...accordionFilters,
                        "saved",
                      ])
                    : setAccordionFilters(
                        accordionFilters.filter((word) => word !== "saved")
                      )
                }
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="accordion-title_wrapper">
                  <ApartmentOutlinedIcon />
                  <div className="accordion-title">Propiedades Publicadas</div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="properties-saved">
                  <div className="empty">
                    <img src={Heart}></img>
                    <p className="bold">
                      No tienes ninguna propiedad publicada
                    </p>
                    <p>
                      {" "}
                      Haz clic en 'Publicar Propiedad' para agregar una
                      propiedad.
                    </p>
                    <div className="search-properties">Publicar Propiedad</div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="accordion"
              expanded={accordionFilters.includes("saved")}
            >
              <AccordionSummary
                onClick={() =>
                  accordionFilters.indexOf("saved") == -1
                    ? setAccordionFilters((accordionFilters) => [
                        ...accordionFilters,
                        "saved",
                      ])
                    : setAccordionFilters(
                        accordionFilters.filter((word) => word !== "saved")
                      )
                }
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="accordion-title_wrapper">
                  <img src={Heart}></img>
                  <div className="accordion-title">Estadisticas</div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="properties-saved">
                  <div className="empty">
                    <img src={Heart}></img>
                    <p className="bold">No tienes ninguna propiedad guardada</p>
                    <p>
                      {" "}
                      Haz clic en el corazon de una propiedad para guardar tus
                      propiedades favoritas y encuentralas aqui mas tarde.
                    </p>
                    <div className="search-properties">Buscar</div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </FormControl>
        </div>
        <div className="right-panel">
          <div className="agent-wrapper">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Quely.jpg"
            ></img>
            <h2> BuscaCasa RD</h2>
            <div className="office-wrapper">
              <p>Santo Domingo</p>
              <p className="address">
                Edificio Coral, Calle Ocean Drive, Sector Naco, Santo Domingo
              </p>
              <p>Bavaro</p>
              <p className="address">
                Edificio Bron, Calle Bottom, Bavaro, La Altagracia
              </p>
            </div>
            <div className="contact-wrapper">
              <div className="contact-container">
                <Phone className="contact-icon" src={Phone} />
                <span>(849) 345 1234</span>
              </div>
              <div className="contact-container">
                <WhatsApp className="contact-icon" />
                <span>(849) 654 7654</span>
              </div>
              <div className="contact-container">
                <MailOutlineOutlinedIcon />
                <span>email@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
