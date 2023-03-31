import { useGetAllChampsQuery } from "./logic/champsApiSlice"

const AllChampions = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    isSuccess
  } = useGetAllChampsQuery('allChampsQuery')
  
  let content
  if(isError) {
    console.log('ERRO: ', error)
    content = <h1>Erro</h1>
  } else if(isLoading) {
    content = <h1>Loading... </h1>
  } else if(isSuccess) {
    console.log('DATA: ', data)
    content = <h1>Sucesso</h1>
  }

  return (
    <div>
      { content }
    </div>
  )
}

export default AllChampions