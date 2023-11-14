import { useQuery } from 'react-query';
import axios from 'axios';
// const queryClient = useQueryClient();
import { ICompanyInfo } from '../../contracts/IPermit';
const api = 'http://localhost:3000'
export function useCompanies() {
    return useQuery('companies', async () => {
      const { data } = await axios.get(`${api}/companies`);
      return data.data;
    });
  }
  export const createCompany = async (data: ICompanyInfo) => {
    const { data: response } = await axios.post(`${api}/companies`, data);
    return response.data;
  };

