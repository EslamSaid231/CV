import Carousel from "react-bootstrap/Carousel";
import "../../Styling/carousel.css";
import suzuki from "./imgs/suzuki1-react.png";
import blackjack from "./imgs/blackjack.png";
import catClock from "./imgs/catClock1.png";
import robofriends from "./imgs/robofriends.png";

function CarouselCom() {
  return (
    <div className="carousels">
      <Carousel>
        <Carousel.Item>
          <a href="https://github.com/EslamSaid231/suzuki-models">
            {" "}
            <img className="d-block w-100" src={suzuki} alt="First slide" />
          </a>
          <Carousel.Caption>
            <div className="projectAbout">
              <h3>Suzuki Motors</h3>
              <p>A landing page layout for Suzuki Motors page using React.js</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://github.com/EslamSaid231/robot-friends-react">
            <img
              className="d-block w-100"
              src={robofriends}
              alt="Second slide"
            />
          </a>
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
          <a href="https://github.com/EslamSaid231/cat-clock">
            {" "}
            <img className="d-block w-100" src={catClock} alt="Third slide" />
          </a>
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
      </Carousel>
    </div>
  );
}

export default CarouselCom;
