import { PRICING_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const pricingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPricing: builder.query({
      query: () => ({
        url: PRICING_URL,
      }),
      providesTags: ["Pricing"],
      keepUnusedDataFor: 5,
    }),
    getPricingDetails: builder.query({
      query: (newId) => ({
        url: `${PRICING_URL}/${newId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updatePricing: builder.mutation({
      query: (data) => ({
        url: `${PRICING_URL}/659999eeec4b0e5ac7a3a0f6`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Pricing"],
    }),
  }),
});

export const {
  useGetPricingQuery,
  useGetPricingDetailsQuery,
  useUpdatePricingMutation,
} = pricingApiSlice;
