import { useQuery } from 'react-query';
import axios from 'axios';

export function useVehicles() {
    return useQuery('vehicles', async () => {
      const { data } = await axios.get('http://localhost:3000/vehicles');
      return data.data;
    });
  }