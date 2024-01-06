import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Message } from "../../components/Message";
import { Loader } from "../../components/Loader";
import { FormContainer } from "../../components/FormContainer";
import { toast } from "react-toastify";
import {
  useGetPricingDetailsQuery,
  useUpdatePricingMutation,
} from "../../slices/pricingApiSlice";
import axios from "axios";

export const PricingEditScreen = () => {
  const endpoint = "https://api.cloudinary.com/v1_1/dqqkpaowz/image/upload";

  const [image, setImage] = useState("");

  const {
    data: pricing,
    isLoading,
    refetch,
    error,
  } = useGetPricingDetailsQuery("659999eeec4b0e5ac7a3a0f6");

  const [updatePricing, { isLoading: loadingUpdate }] =
    useUpdatePricingMutation();

  const [loadingUploadImg, setIsLoadingUploadImg] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updatePricing({
        image,
      }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
      toast.success("Product updated");
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (pricing) {
      setImage(pricing.image);
    }
  }, [pricing]);

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
    <FormContainer>
      <h1>Chỉnh sửa hình ảnh phí vận chuyển</h1>
      {loadingUpdate && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data.message}</Message>
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="image">
            <Form.Label>Hình ảnh </Form.Label>
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

          <Button type="submit" variant="primary" style={{ marginTop: "1rem" }}>
            Cập nhật
          </Button>
        </Form>
      )}
    </FormContainer>
  );
};
