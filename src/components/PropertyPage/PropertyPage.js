import "./PropertyPage.scss";
import { useState } from "react";
import FilterList from "../FilterList/FilterList"
import ResultsList from "../ResultsList/ResultsList"
import ResultsMap from "../ResultsMap/ResultsMap"
import SearchBar from "../SearchBar/SearchBar"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function ResultsPage(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <div className = "large-image_container">
    <Carousel>
                <div>
                    <img src="https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/b4/c4/75/940265562.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>    </div>

    </>
  );
}
