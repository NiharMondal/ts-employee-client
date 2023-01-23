import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//import User model from the utils folder
import { UserProps } from "../../utils/types";

const BASE_URL = "http://localhost:4000/api/v1/";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    //add user
    addUser: builder.mutation<void, UserProps>({
      query: (user) => ({
        url: "user",
        method: "post",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),

    //get all users
    allUsers: builder.query<UserProps[], void>({
      query: () => "user",
      providesTags: ["Users"],
    }),

    //get single user by id
    user: builder.query<UserProps, string | undefined>({
      query: (id) => `user/${id}`,
    }),
    //update user
    updateUser: builder.mutation<void, UserProps>({
      query: ({ _id, ...rest }) => ({
        url: `user/${_id}`,
        method: "put",
        body: rest,
      }),
      invalidatesTags: ["Users"],
    }),
    //delete user by id
    deleteUser: builder.mutation<string, string >({
      query: (id) => ({
        url: `user/${id}`,
        method: "delete",
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
