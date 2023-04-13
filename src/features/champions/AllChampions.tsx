import { useGetAllChampsQuery } from "./logic/champsApiSlice"
import SpinningLoader from "../../components/loader"

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
    content = <SpinningLoader />
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