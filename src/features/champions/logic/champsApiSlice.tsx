import { lolAPI } from "../../apis/lolApi";

const champsApiSlice = lolAPI.injectEndpoints({
    endpoints: (builder) => ({
        getAllChamps: builder.query({
            query: () => 'champion.json',
            transformResponse: (response: any) => {
                return Object.values(response.data)
            },
            providesTags: (data: any) => [
                { type: 'Champs', id: 'LIST' },
                ...data.map((item: any) => ({ type: 'Album', id: item.id }))
            ]
        }),
       
    })
})

export const {
    useGetAllChampsQuery
} = champsApiSlice