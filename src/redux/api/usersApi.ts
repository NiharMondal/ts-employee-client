import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { UserProps } from "../../utils/helper";
const BASE_URL = "http://localhost:4000/api/v1/";

interface CustomError {
  data: {
    message:string,
    errors: any
  }
}
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }) as BaseQueryFn<string | FetchArgs, unknown ,CustomError,{}>,
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    //------------
    //get all users
    getAllUsers: builder.query<UserProps[], void>({
      query: () => "/",
      providesTags: ["Users"],
    }),

    //add user
    addUser: builder.mutation<void, UserProps>({
      query: (user) => {
        return {
          url: "user",
          method: "post",
          body: user,
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useAddUserMutation } = usersApi;
