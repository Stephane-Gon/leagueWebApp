import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl : 'https://euw1.api.riotgames.com/lol',
  prepareHeaders: (headers) => {
    headers.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36")
    headers.set("Accept-Language", "pt,en;q=0.9,pt-PT;q=0.8,en-US;q=0.7")
    headers.set("Accept-Charset", "application/x-www-form-urlencoded; charset=UTF-8")
    headers.set("Origin", "https://developer.riotgames.com")
    headers.set("X-Riot-Token", import.meta.env.VITE_RIOT_API_KEY)
  }
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


export const riotMainAPI = createApi({
  reducerPath: 'riotApi',
  baseQuery,
  // tagTypes:[],
  endpoints: builder => ({})
})