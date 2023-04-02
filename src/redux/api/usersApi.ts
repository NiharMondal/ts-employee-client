import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//import User model from the utils folder
import { TUser, TUserResponse, TQuery } from "../../utils/types";

const BASE_URL = "https://ts-crud-back-end.onrender.com/api/v1/";

const LOCAL_URL = "http://localhost:4000/api/v1/";
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: LOCAL_URL }),
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

    getAllUsers: builder.query<TUserResponse[], TQuery>({
      query: ({ gender, role, status, country }) => {
        return {
          url: `user?gender=${gender}&role=${role}&status=${status}&country=${country}`,
        };
      },
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
  useUserQuery,
  useGetAllUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
