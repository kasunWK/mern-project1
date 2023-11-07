import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    register: builder.mutation<boolean, RegisterRequest>({
      query: (data) => ({
        method: "post",
        url: `user/create`,
        body: data,
      }),
      transformResponse: (res: CommonResponse<{}>) => {
        return !res.error;
      },
      invalidatesTags: ["user"],
    }),
    editUser: builder.mutation<boolean, UserEditRequest>({
      query: (data) => ({
        method: "post",
        url: `user/edit`,
        body: data,
      }),
      transformResponse: (res: CommonResponse<{}>) => {
        return !res.error;
      },
      invalidatesTags: ["user"],
    }),
    login: builder.mutation<UserType | undefined, LoginRequest>({
      query: (data) => ({
        method: "post",
        url: `user/login`,
        body: data,
      }),
      transformResponse: (res: CommonResponse<UserType>) => {
        return res.data;
      },
      invalidatesTags: ["user"],
    }),
    getUsers: builder.query<UserType[] | undefined, any>({
      query: () => ({
        method: "get",
        url: `user/getUsers`,
      }),
      transformResponse: (res: CommonResponse<UserType[]>) => {
        return res.data;
      },
      providesTags: ["user"],
    }),
    disableUser: builder.mutation<
      UserType | undefined,
      { user_id: string; is_deleted: boolean }
    >({
      query: (data) => ({
        method: "post",
        url: `user/delete`,
        body: data,
      }),
      transformResponse: (res: CommonResponse<UserType>) => {
        return res.data;
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLazyGetUsersQuery,
  useDisableUserMutation,
  useEditUserMutation,
} = userApi;
export const selectUser = (state: RootState): UserType | null => {
  return state.user;
};
