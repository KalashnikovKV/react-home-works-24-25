import { useState, useEffect } from "react";

const useFetch = (url: string, options: RequestInit) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
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
          status: response.status.toString(),

          responseBody,
        });

        setData(responseBody);
      } catch (err: unknown) {
        if (err instanceof Error) {
          logApiCall({
            url,
            options,
            status: "error",
            responseBody: null,
            error: err.message,
          });
          setError(err.message);
        } else {
          logApiCall({
            url,
            options,
            status: "error",
            responseBody: null,
            error: "An unknown error occurred",
          });
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error, loading };
};

const logApiCall = ({
  url,
  options,
  status,
  responseBody,
  error = null,
}: {
  url: string;
  options: RequestInit;
  status: string;
  responseBody: any;
  error?: string | null;
}) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    url,
    method: options?.method || "GET",
    body: options?.body || null,
    status,
    responseBody,
    error,
  };

  const logs = JSON.parse(localStorage.getItem("apiLogs") || "[]");
  logs.push(logEntry);
  localStorage.setItem("apiLogs", JSON.stringify(logs));
};

export default useFetch;
