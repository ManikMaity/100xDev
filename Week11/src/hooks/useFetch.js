import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  async function getData() {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }

  useEffect(() => {
    setLoading(true);
    getData()
      .then((result) => {
        console.log(result);
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
        setIsError(true);
      });
  }, [url]);

  // useEffect(() => {
  //   const interval = setInterval(getData, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return { data, loading, error, isError };
}

export default useFetch;
