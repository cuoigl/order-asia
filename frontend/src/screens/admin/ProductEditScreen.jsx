import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Message } from "../../components/Message";
import { Loader } from "../../components/Loader";
import { FormContainer } from "../../components/FormContainer";
import { toast } from "react-toastify";
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
} from "../../slices/productsApiSlice";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const ProductEditScreen = () => {
  const endpoint = "https://api.cloudinary.com/v1_1/dqqkpaowz/image/upload";
  const { id: productId } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation();

  const [loadingUploadImg, setIsLoadingUploadImg] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({
        productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
      toast.success("Product updated");
      refetch();
      navigate("/admin/productlist");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product]);

  // const uploadFileHandler = async (e) => {
  //   const formData = new FormData();
  //   formData.append("image", e.target.files[0]);
  //   try {
  //     const res = await uploadProductImage(formData).unwrap();
  //     toast.success(res.message);
  //     setImage(res.image);
  //   } catch (err) {
  //     toast.error(err?.data?.message || err.error);
  //   }
  // };

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
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Chỉnh sửa sản phẩm</h1>
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error.data.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Giá</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Hình ảnh (size 640 × 510)</Form.Label>
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

            <Form.Group controlId="brand">
              <Form.Label>Thương hiệu</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="countInStock">
              <Form.Label>Số lượng</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Loại</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Mô tả</Form.Label>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
              />
              {/* <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
              ></Form.Control> */}
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
