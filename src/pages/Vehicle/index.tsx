import Table from '../../components/table/table'
import { VehicalColumns } from '../../components/table/column';
import { useVehicles } from './vehicleServices';
import {useEffect} from 'react'
const Vehical = () => {
  useEffect(()=>{
    console.log("useEffect")
  },[])
  const { status, data, error, isFetching } = useVehicles();

    return <>
   
    <>
      {status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <Table mockData={data} columns={VehicalColumns} />
      )}
    </>
    </>
  };
  
  export default Vehical;