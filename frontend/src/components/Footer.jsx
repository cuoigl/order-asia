import { Container, Row, Col, Image } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import logo from "../assets/logo.png";
import zaloQR from "../assets/qr_zalo.jpg";

export const Footer = () => {
  return (
    <footer className="background-footer">
      <Container>
        <Row>
          <Col className="py-3" lg={3} xl={5}>
            <img src={logo} alt="" />
            <p>CÔNG TY TNHH THƯƠNG MẠI QUỐC TẾ ASIABUY</p>
            <p>Giấy phép kinh doanh: MST 0402217588</p>
            <p style={{ lineHeight: "normal" }}>
              Địa chỉ: Số 110 Ngũ Hành Sơn, Phường Mỹ An, Quận Ngũ Hành Sơn,
              Thành phố Đà Nẵng, Việt Nam
            </p>
            <p style={{ lineHeight: "normal" }}>Hotline: 0796690690</p>
            <p style={{ lineHeight: "normal" }}>
              P.Kinh doanh: 0934095782 (Ms.Huệ)
            </p>
            <p style={{ lineHeight: "normal" }}>G.Đốc: 0933244852 (Ms.Thoan)</p>
            <p style={{ lineHeight: "normal" }}>
              Email: asiabuy.logistics01@gmail.com
            </p>
          </Col>
          <Col lg={6} xl={4} className="text-center py-3 mt-2">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.3060958713845!2d108.23503967593243!3d16.049598084627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d875c585f1%3A0x432eceaa7197fe76!2zMTEwIE5nxakgSMOgbmggU8ahbiwgQuG6r2MgTeG7uSBQaMO6LCBOZ8WpIEjDoG5oIFPGoW4sIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1704409941929!5m2!1svi!2s"
              width="400"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col lg={3} xl={3} className="py-3 mt-2">
            <Row>
              <Col>
                <div className="ms-5 mt-2 ">
                  <div className="py-1">
                    <a href="https://www.facebook.com/asiabuy.logistics">
                      <div className="icon-footer">
                        <FaFacebookF />
                      </div>
                    </a>
                  </div>
                  <div className="py-1">
                    <a href="https://m.me/194972333697366">
                      <div className="icon-footer">
                        <FaFacebookMessenger />
                      </div>
                    </a>
                  </div>
                  <div className="py-1">
                    <a href="https://zalo.me/0796690609">
                      <div className="icon-footer">
                        <SiZalo />
                      </div>
                    </a>
                  </div>
                  <div className="py-1">
                    <a href="https://www.tiktok.com/@asiabuy1?is_from_webapp=1&sender_device=pc">
                      <div className="icon-footer">
                        <FaTiktok />
                      </div>
                    </a>
                  </div>
                  <div className="py-1">
                    <a href="https://www.youtube.com/channel/UCFnn1X9_MkjTQFrQS6VnKkA">
                      <div className="icon-footer">
                        <FaYoutube />
                      </div>
                    </a>
                  </div>
                  <div className="py-1">
                    <a href="https://www.instagram.com/aisiabuy/">
                      <div className="icon-footer">
                        <FaInstagram />
                      </div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="mt-4">
                  <h5>Zalo</h5>
                  <Image src={zaloQR} rounded width="150px" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
