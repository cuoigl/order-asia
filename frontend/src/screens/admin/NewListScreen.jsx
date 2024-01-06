import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Message } from "../../components/Message";
import { Loader } from "../../components/Loader";
import { toast } from "react-toastify";

import {
  useGetNewsQuery,
  useDeleteNewMutation,
} from "../../slices/newApiSlice";

export const NewListScreen = () => {
  const { data: news, isLoading, error, refetch } = useGetNewsQuery();

  const [deleteNew, { isLoading: loadingDelete }] = useDeleteNewMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      try {
        await deleteNew(id);
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Danh sách tin tức</h1>
        </Col>
        <Col className="text-end">
          <LinkContainer to={`/admin/new/create`}>
            <Button className="my-3">
              <FaPlus /> Thêm tin tức
            </Button>
          </LinkContainer>
        </Col>
      </Row>

      {/* {loadingCreate && <Loader />} */}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error.data.message}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tiêu đề</th>
                <th>Loại tin</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {news.map((newCurrent) => (
                <tr key={newCurrent._id}>
                  <td>{newCurrent._id}</td>
                  <td>{newCurrent.title}</td>
                  <td>
                    {newCurrent.type === "customer"
                      ? "Khách hàng"
                      : newCurrent.type === "transport"
                      ? "Vận chuyển"
                      : "Hàng hoá"}
                  </td>
                  <td>
                    <LinkContainer to={`/admin/new/${newCurrent._id}/edit`}>
                      <Button variant="light" className="btn-sm mx-2">
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(newCurrent._id)}
                    >
                      <FaTrash style={{ color: "white" }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};
