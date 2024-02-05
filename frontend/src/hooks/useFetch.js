import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url, options);
        setResponse(res);
      } catch (err) {
        setError(err);
      } finally {
        setIsFetching(false);
      }
    };

    if (!url) {
      throw new Error("URL is required");
    }

    fetchData();
  }, [url, options]);

  return { isFetching, response, error };
};

export default useFetch;
