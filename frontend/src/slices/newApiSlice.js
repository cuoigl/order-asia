import { NEWS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const mewsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => ({
        url: NEWS_URL,
      }),
      providesTags: ["New"],
      keepUnusedDataFor: 5,
    }),
    getNewsCustomer: builder.query({
      query: () => `${NEWS_URL}/newscustomer`,
      keepUnusedDataFor: 5,
    }),
    getNewsTransport: builder.query({
      query: () => `${NEWS_URL}/newstransport`,
      keepUnusedDataFor: 5,
    }),
    getNewsGoods: builder.query({
      query: () => `${NEWS_URL}/newsgoods`,
      keepUnusedDataFor: 5,
    }),
    createNew: builder.mutation({
      query: (data) => ({
        url: `${NEWS_URL}`,
        method: "POST",
        body: {
          title: data.title,
          image: data.image,
          type: data.type,
          description: data.description,
        },
      }),
      invalidatesTags: ["New"],
    }),
    getNewDetails: builder.query({
      query: (newId) => ({
        url: `${NEWS_URL}/${newId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updateNew: builder.mutation({
      query: (data) => ({
        url: `${NEWS_URL}/${data.newId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["News"],
    }),
    deleteNew: builder.mutation({
      query: (newId) => ({
        url: `${NEWS_URL}/${newId}`,
        method: "DELETE",
      }),
      providesTags: ["New"],
    }),
  }),
});

export const {
  useGetNewsQuery,
  useCreateNewMutation,
  useUpdateNewMutation,
  useDeleteNewMutation,
  useGetNewsCustomerQuery,
  useGetNewsTransportQuery,
  useGetNewsGoodsQuery,
  useGetNewDetailsQuery,
} = mewsApiSlice;
