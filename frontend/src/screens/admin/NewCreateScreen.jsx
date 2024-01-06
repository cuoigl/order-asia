import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Loader } from "../../components/Loader";
import { FormContainer } from "../../components/FormContainer";
import { toast } from "react-toastify";
import { useCreateNewMutation } from "../../slices/newApiSlice";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const NewCreateScreen = () => {
  const endpoint = "https://api.cloudinary.com/v1_1/dqqkpaowz/image/upload";

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const [loadingUploadImg, setIsLoadingUploadImg] = useState(false);

  const [createNew] = useCreateNewMutation();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createNew({
        title,
        image,
        type,
        description,
      }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block

      toast.success("New created");
      navigate("/admin/newlist");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

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
        <h1>Thêm tin tức</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Tiêu đề</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter tile"
              onChange={(e) => setTitle(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Hình ảnh</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image url"
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
          </Form.Group>
          <Form.Select onChange={(e) => setType(e.target.value)}>
            <option>Open this select menu</option>
            <option value="customer">Khách hàng</option>
            <option value="transport">Vận chuyển</option>
            <option value="goods">Hàng hoá</option>
          </Form.Select>

          <Form.Group controlId="description">
            <Form.Label>Mô tả</Form.Label>
            <ReactQuill theme="snow" onChange={setDescription} />
          </Form.Group>

          <Button type="submit" variant="primary" style={{ marginTop: "1rem" }}>
            Tạo mới
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};
