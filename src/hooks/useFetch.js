import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = url => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  async function fetchData(url) {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      //   console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { loading: isLoading, fetchedData: data };
};

export default useFetch;
