import { useEffect, useState } from "react";

function App() {
  const [healthData, setHealthData] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/health`)
      .then((response) => response.json())
      .then((data) => {
        setHealthData(data);
      })
      .catch((error) => {
        console.error("Error calling backend:", error);
      });
  }, []);

  return (
    <div>
      <h1>Secure Notes App</h1>

      <h2>Backend Response:</h2>

      {healthData ? (
        <pre>{JSON.stringify(healthData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

