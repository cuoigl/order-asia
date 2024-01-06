import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Message } from "../../components/Message";
import { Loader } from "../../components/Loader";
import { FormContainer } from "../../components/FormContainer";
import { toast } from "react-toastify";
import {
  useGetNewDetailsQuery,
  useUpdateNewMutation,
} from "../../slices/newApiSlice";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const NewEditScreen = () => {
  const endpoint = "https://api.cloudinary.com/v1_1/dqqkpaowz/image/upload";
  const { id: newId } = useParams();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const {
    data: newCurrent,
    isLoading,
    refetch,
    error,
  } = useGetNewDetailsQuery(newId);

  const [updateNew, { isLoading: loadingNew }] = useUpdateNewMutation();

  const [loadingUploadImg, setIsLoadingUploadImg] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateNew({
        newId,
        title,
        image,
        type,
        description,
      }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
      toast.success("New updated");
      refetch();
      navigate("/admin/newlist");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (newCurrent) {
      setTitle(newCurrent.title);
      setImage(newCurrent.image);
      setType(newCurrent.type);
      setDescription(newCurrent.description);
    }
  }, [newCurrent]);

  const uploadFileHandler = async (e) => {
    setIsLoadingUploadImg(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    console.log(e.target.files[0]);
    formData.append("upload_preset", "ufnmc8mr");
    formData.append("folder", "asiabuy");
    try {
      const { data } = await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImage(data.url);
      setIsLoadingUploadImg(false);
    } catch (err) {
      setIsLoadingUploadImg(false);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Link to="/admin/newlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Chỉnh sửa tin tức</h1>
        {loadingNew && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error.data.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter tile"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.Control
                label="Choose File"
                onChange={uploadFileHandler}
                type="file"
              ></Form.Control>
              {loadingUploadImg && <Loader />}
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Loại</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Enter type"
                value={type}
              ></Form.Control> */}
            </Form.Group>
            <Form.Select
              aria-label="value"
              defaultValue={newCurrent.type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Open this select menu</option>
              <option value="customer">Khách hàng</option>
              <option value="transport">Vận chuyển</option>
              <option value="goods">Hàng hoá</option>
            </Form.Select>

            <Form.Group controlId="description">
              <Form.Label>Mô tả</Form.Label>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
              />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              style={{ marginTop: "1rem" }}
            >
              Cập nhật
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};
