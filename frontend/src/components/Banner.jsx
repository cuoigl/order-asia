import Carousel from "react-bootstrap/Carousel";
import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

export const Banner = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>   
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
