import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: (builder) => ({

        createUser: builder.mutation({
            query: (data) => ({
                url: `user/`,
                method: 'POST',
                body: data
            }),
        }),
    })
})

export const { useCreateUserMutation } = userApi