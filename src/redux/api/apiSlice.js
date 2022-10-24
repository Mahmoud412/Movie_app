import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/movie' }),
    endpoints: (builder) => ({
      getMovies: builder.query({
        query: () =>'/popular?api_key=5a890566bdcb7118ee21f39720e0a6d6&language=en-US&page=1',
      }),
    }),
  })
  
export const {
    useGetMoviesQuery
} = apiSlice
