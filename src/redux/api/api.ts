import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'BaseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ({
                url: '/todos',
                method: 'GET'
            })
        }),

        addTodo: builder.mutation({
            query: (data) => ({
                url: '/todos',
                method: 'POST',
                body: data
            })
        })

    })
   
})

export const { useGetTodosQuery, useAddTodoMutation } = baseApi;