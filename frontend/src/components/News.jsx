import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const News = ({ newDetail }) => {
  return (
    <Card className="mb-2">
      <Row>
        <Col lg={3}>
          <Card.Img variant="top" src={newDetail.image} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{newDetail.title}</Card.Title>
            <Card.Text>
              <div
                dangerouslySetInnerHTML={{ __html: newDetail.description }}
              />
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
