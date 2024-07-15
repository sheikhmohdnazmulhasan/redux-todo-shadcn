import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'BaseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['todo'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (userId: number | string) => {
                const params = new URLSearchParams();

                if (userId) {
                    params.append('userId', userId as string)
                }

                return {
                    url: '/todos',
                    method: 'GET',
                    params: params
                }
            },
            providesTags: ['todo']
        }),

        addTodo: builder.mutation({
            query: (data) => {
                console.log('log from base api =>', data);

                return {
                    url: '/todos',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['todo'],
        })

    })

})

export const { useGetTodosQuery, useAddTodoMutation } = baseApi;