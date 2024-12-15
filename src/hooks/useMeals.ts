import { useState, useEffect } from "react";

const useMeals = () => {
  const [meals, setMeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMeals(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  return { meals, loading, error };
};

export default useMeals;
