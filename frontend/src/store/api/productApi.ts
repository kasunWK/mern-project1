import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Categories } from "../../componant/common/products";

export const productApi = createApi({
  reducerPath: "product",
  tagTypes: ["product"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ItemType[] | undefined, any>({
      query: () => ({
        url: `item/get`,
      }),
      transformResponse: (res: CommonResponse<ItemType[]>) => {
        return res.data;
      },
      providesTags: ["product"],
    }),
    getProductsByCategories: builder.mutation<
      ItemType[] | undefined,
      ProductByCategoryRequest
    >({
      query: (data) => ({
        method: "post",
        url: `item/getstockofcategory`,
        body: {
          category: Categories[data.category-1],
        },
      }),
      transformResponse: (res: CommonResponse<ItemType[]>) => {
        return res.data;
      },
    }),
    addProduct: builder.mutation<Boolean, FormData>({
      query: (data) => ({
        method: "post",
        url: `item/create`,
        body: data,
      }),
      transformResponse: (res: CommonResponse<ItemType>) => {
        return !res.error;
      },
      invalidatesTags: ["product"],
    }),
    editProduct: builder.mutation<Boolean, UpdateProductRequest>({
      query: (data) => ({
        method: "post",
        url: `item/update`,
        body: data,
      }),
      transformResponse: (res: CommonResponse<ItemType>) => {
        return !res.error;
      },
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation<Boolean, { item_id: string }>({
      query: (data) => ({
        method: "post",
        url: `item/delete`,
        body: data,
      }),
      transformResponse: (res: CommonResponse<ItemType>) => {
        return !res.error;
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useLazyGetProductsQuery,
  useGetProductsByCategoriesMutation,
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} = productApi;
