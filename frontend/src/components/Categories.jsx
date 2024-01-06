import React from "react";
import { useNavigate } from "react-router-dom";
import { Message } from "../components/Message";
import { useGetCategoriesQuery } from "../slices/productsApiSlice";
import { Button } from "react-bootstrap";

export const Categories = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    navigate(`/categories/${e.target.value.trim()}`);
  };
  const { data: categories, isLoading, error } = useGetCategoriesQuery({});
  console.log(categories);
  return isLoading ? null : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    categories.map((category) => (
      <Button
        size="sm"
        className="mx-1"
        value={category}
        onClick={(e) => submitHandler(e)}
      >
        {category}
      </Button>
    ))
  );
};
