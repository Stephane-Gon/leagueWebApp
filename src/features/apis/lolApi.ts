import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl : 'http://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_GB/'
})





export const lolAPI = createApi({
  reducerPath: 'riotApi',
  baseQuery,
  tagTypes:['Champs'],
  endpoints: builder => ({})
})