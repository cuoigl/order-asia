import { Container, Image } from "react-bootstrap";
import { Message } from "../components/Message";
import { Loader } from "../components/Loader";

import { useGetPricingDetailsQuery } from "../slices/pricingApiSlice";

export const Pricing = () => {
  const {
    data: pricing,
    isLoading,
    error,
  } = useGetPricingDetailsQuery("659999eeec4b0e5ac7a3a0f6");
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data.message}</Message>
      ) : (
        <Image src={pricing.image} thumbnail />
      )}
    </Container>
  );
};
