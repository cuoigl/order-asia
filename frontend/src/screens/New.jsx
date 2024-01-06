import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import { News } from "../components/News";

import { Loader } from "../components/Loader";
import { Message } from "../components/Message";

import {
  useGetNewsCustomerQuery,
  useGetNewsTransportQuery,
  useGetNewsGoodsQuery,
} from "../slices/newApiSlice";

export const New = () => {
  const { data: newsCus, isLoadingCus, errorCus } = useGetNewsCustomerQuery();
  const { data: newsTr, isLoadingTr, errorTr } = useGetNewsTransportQuery();
  const { data: newsGo, isLoadingGo, errorGo } = useGetNewsGoodsQuery();

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="customer">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="customer">Khách hàng</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ship">Vận chuyển</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="product">Hàng hoá</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="customer">
              {isLoadingCus ? (
                <Loader />
              ) : errorCus ? (
                <Message variant="danger">
                  {errorCus?.data?.message || errorCus.error}
                </Message>
              ) : (
                newsCus?.map((newCus) => (
                  <News key={newCus._id} newDetail={newCus} />
                ))
              )}
            </Tab.Pane>
            <Tab.Pane eventKey="ship">
              {isLoadingTr ? (
                <Loader />
              ) : errorTr ? (
                <Message variant="danger">
                  {errorTr?.data?.message || errorTr.error}
                </Message>
              ) : (
                newsTr?.map((newTr) => (
                  <News key={newTr._id} newDetail={newTr} />
                ))
              )}
            </Tab.Pane>
            <Tab.Pane eventKey="product">
              {isLoadingGo ? (
                <Loader />
              ) : errorGo ? (
                <Message variant="danger">
                  {errorGo?.data?.message || errorGo.error}
                </Message>
              ) : (
                newsGo?.map((newGo) => (
                  <News key={newGo._id} newDetail={newGo} />
                ))
              )}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};
