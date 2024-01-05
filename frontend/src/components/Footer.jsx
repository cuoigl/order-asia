import { Container, Row, Col, Image } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
import logo from "../assets/logo.png";
import qrzalo from "../assets/qr_zalo.jpg";

export const Footer = () => {
  return (
    <footer className="background-footer">
      <Container>
        <Row>
          <Col className="py-3" lg={5}>
            <img src={logo} alt="" />
            <p>CÔNG TY TNHH THƯƠNG MẠI QUỐC TẾ ASIABUY</p>
            <p>
              Địa chỉ: Số 110 Ngũ Hành Sơn, Phường Mỹ An, Quận Ngũ Hành Sơn,
              Thành phố Đà Nẵng, Việt Nam
            </p>
            <p>Hotline: 0796690690 (Ms.Huệ) </p>
            <p>G.Đốc: 0933244852 (Ms.Thoan) </p>
            <p>Email: asiabuy.logistics01@gmail.com</p>
            <p>Giấy phép kinh doanh: 0402217588</p>
          </Col>
          <Col className="text-center py-3">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.3060958713845!2d108.23503967593243!3d16.049598084627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d875c585f1%3A0x432eceaa7197fe76!2zMTEwIE5nxakgSMOgbmggU8ahbiwgQuG6r2MgTeG7uSBQaMO6LCBOZ8WpIEjDoG5oIFPGoW4sIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1704409941929!5m2!1svi!2s"
              width="400"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col lg={3} className="py-3">
            <div className=" d-flex">
              <a href="https://www.facebook.com/asiabuy.logistics">
                <div className="icon-footer">
                  <FaFacebookF />
                </div>
              </a>
              <a
                style={{ lineHeight: "40px", marginLeft: "8px" }}
                href="https://www.facebook.com/asiabuy.logistics"
              >
                fb.com/asiabuy.logistics
              </a>
            </div>
            <div className="icon-footer">
              <div>
                <SiZalo />
              </div>

              <Image style={{ width: "200px" }} src={qrzalo} rounded />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
