import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orders",
  tagTypes: ["orders"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getOrders: builder.query<OrderType[] | undefined, any>({
      query: () => ({
        url: `order/get`,
      }),
      transformResponse: (res: CommonResponse<OrderType[]>) => {
        return res.data;
      },
      providesTags: ["orders"],
    }),
    changeOrderStatus: builder.mutation<
      OrderType[] | undefined,
      ChangeOrderStatusRequest
    >({
      query: (data) => ({
        method: "post",
        url: `order/changestatus`,
        body: data,
      }),
      transformResponse: (res: CommonResponse<OrderType[]>) => {
        return res.data;
      },
      invalidatesTags: ["orders"],
    }),
    createOrder: builder.mutation<boolean, CreateOrderRequest>({
      query: (data) => ({
        method: "post",
        url: `order/create`,
        body: data,
      }),
      transformResponse: (res: CommonResponse<OrderType[]>) => {
        return !res.error;
      },
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useLazyGetOrdersQuery,
  useChangeOrderStatusMutation,
  useCreateOrderMutation,
} = orderApi;
