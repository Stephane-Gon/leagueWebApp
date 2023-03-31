import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl : '',
  prepareHeaders: (headers) => {}
})





export const lolAPI = createApi({
  reducerPath: 'riotApi',
  baseQuery,
  // tagTypes:[],
  endpoints: builder => ({})
})