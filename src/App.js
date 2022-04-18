import { useEffect, useState } from "react";

const App = () => {
  const [whales, setWhales] = useState([]);

  useEffect(() => {
    const fetchWhales = async () => {
      const response = await fetch("http://localhost:8000/whales/");
      const result = await response.json(response);
      setWhales(result);
      console.log(result)
    };
    fetchWhales();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <h1
        style={{
          fontSize: 44,
          color: "turquoise",
          fontWeight: "bold",
        }}
      >
        All About Whales
      </h1>
      <div>
        {whales.map((whale) => (
          <div
            style={{
              padding: 15,
              fontSize: 24,
              color: "turquoise",
              borderRadius: 5,
              border: "2px solid black",
            }}
          >
            <p>{whale.name} - {whale.species_status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
