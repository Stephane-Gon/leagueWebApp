import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl : '',
  // prepareHeaders: (headers) => {}
})


//* UTILIZAR INTERCEPTOR APENAS SE NECESSÁRIO
// const generalInterceptor = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions)

//   if(result?.error) {
//       console.log('ERROR : ', result.error)
//   } else {
//       console.log('RESULT: ', result)
//   }
//   return result
// }


export const riotAPI = createApi({
  reducerPath: 'riotApi',
  baseQuery,
  // tagTypes:[],
  endpoints: builder => ({})
})