import Carousel from "react-bootstrap/Carousel";
import "../../Styling/carousel.css";
import suzuki from "./imgs/suzuki1-react.png";

import catClock from "./imgs/catClock1.png";
import robofriends from "./imgs/robofriends.png";
import netflix from "./imgs/netflix.png";
import { Link } from "react-router-dom";
function CarouselCom() {
  return (
    <div className="carousels">
      <Carousel>
        <Carousel.Item>
          <Link
            to="https://github.com/EslamSaid231/suzuki-models"
            target="_blank"
          >
            {" "}
            <img className="d-block w-100" src={suzuki} alt="First slide" />
          </Link>
          <Carousel.Caption>
            <div className="projectAbout">
              <h3>Suzuki Motors</h3>
              <p>A landing page layout for Suzuki Motors page using React.js</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link
            to={"https://github.com/EslamSaid231/robot-friends-react"}
            target="_blank"
          >
            <img
              className="d-block w-100"
              src={robofriends}
              alt="Second slide"
            />
          </Link>
          <Carousel.Caption>
            <div className="projectAbout">
              <h3>RoboFriends</h3>
              <p>
                A landing page with a database of multiple users and responsive
                search bar
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="https://github.com/EslamSaid231/cat-clock" target="_blank">
            {" "}
            <img className="d-block w-100" src={catClock} alt="Third slide" />
          </Link>
          <Carousel.Caption>
            <div>
              <div className="projectAbout">
                <h3>Cat Clock</h3>
                <p>
                  A clock with alarm and responsive layout depending on time
                </p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link
            to="https://github.com/EslamSaid231/netflix-react-router.git"
            target="_blank"
          >
            {" "}
            <img className="d-block w-100" src={netflix} alt="Fourth slide" />
          </Link>
          <Carousel.Caption>
            <div>
              <div className="projectAbout">
                <h3>Netflix Movie App</h3>
                <p>
                  Netflix Application with a responsive layout compatible with
                  mobile viewport (768px)
                </p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselCom;
