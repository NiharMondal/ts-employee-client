import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//import User model from the utils folder
import { TUser, TUserResponse } from "../../utils/types";

const BASE_URL = "https://ts-crud-back-end.onrender.com/api/v1/";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    //add user
    addUser: builder.mutation<void, TUser>({
      query: (user) => ({
        url: "user",
        method: "post",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),

    //get all users
    allUsers: builder.query<TUserResponse[], void>({
      query: () => "user",
      providesTags: ["Users"],
    }),

    //get single user by id
    user: builder.query<TUserResponse, string>({
      query: (id) => `user/${id}`,
      providesTags: ["Users"],
    }),

    //update user
    updateUser: builder.mutation<void, TUserResponse>({
      query: ({ _id, ...rest }) => ({
        url: `user/${_id}`,
        method: "put",
        body: rest,
      }),
      invalidatesTags: ["Users"],
    }),
    //delete user by id
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `user/${id}`,
        method: "delete",
        headers: {},
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useAllUsersQuery,
  useUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
