import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img from "../assets/sample.jpg";

export const News = () => {
  return (
    <Card>
      <Row>
        <Col lg={3}>
          <Card.Img variant="top" src={img} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
