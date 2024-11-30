import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        const responseBody = await response.json();

        logApiCall({
          url,
          options,
          status: response.status,
          responseBody,
        });

        setData(responseBody);
      } catch (err) {
        logApiCall({
          url,
          options,
          status: "error",
          responseBody: null,
          error: err.message,
        });
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error, loading };
};

const logApiCall = ({ url, options, status, responseBody, error = null }) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    url,
    method: options?.method || "GET",
    body: options?.body || null,
    status,
    responseBody,
    error,
  };

  const logs = JSON.parse(localStorage.getItem("apiLogs")) || [];
  logs.push(logEntry);
  localStorage.setItem("apiLogs", JSON.stringify(logs));
};

export default useFetch;
