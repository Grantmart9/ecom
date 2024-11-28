import React, { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (
  url,
  method = "GET",
  options = {},
  autoFetch = true
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios({
        url,
        method,
        ...options,
      });
      setData(response.data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [url, method, options]);

  return { data, loading, error, refetch: fetchData };
};
