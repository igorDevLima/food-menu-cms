import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useStrapi = ({ route, populate }) => {
  const [strapiData, setStrapiData] = useState(null);
  const [strapiConfig, setStrapiConfig] = useState(null);
  const [strapiHeader, setStrapiHeader] = useState(null);
  const [strapiStatus, setStrapiStatus] = useState(null);

  const { isFetching, response, error } = useFetch(
    `http://localhost:1337/api/${route}${populate ? "?" + populate : ""}`
  );

  useEffect(() => {
    if (response !== undefined && response !== null) {
      setStrapiData(response.data.data.attributes);
      setStrapiConfig(response.config);
      setStrapiHeader(response.headers);
      setStrapiStatus(response.status);
      console.log(response);
    }
  }, [response]);

  const convertToStrapiImageUrl = (imageUrl) => `http://localhost:1337${imageUrl}`;

  return {
    strapiData,
    strapiConfig,
    strapiHeader,
    strapiStatus,
    isFetching,
    error,
    convertToStrapiImageUrl
  };
};

export default useStrapi;
