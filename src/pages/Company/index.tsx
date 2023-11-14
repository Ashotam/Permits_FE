import Table from '../../components/table/table';
import { CompanyColumns } from '../../components/table/column';
import { useCompanies } from './companyServices';
const Company = () => {
  const { status, data, error, isFetching } = useCompanies();
 
  return (
    <>
      {status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <Table mockData={data} columns={CompanyColumns} />
      )}
    </>
  );
};

export default Company;