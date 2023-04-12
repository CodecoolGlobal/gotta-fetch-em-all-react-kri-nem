import React, { useState, useEffect } from "react";
import WorldItems from "./WorldItems";
function World() {
  const fetchData = async (url, key) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWorld(data[key]);
    } catch (error) {
      console.log("error", error);
    }
  };
  const area = "https://pokeapi.co/api/v2/location/";
  const [world, setWorld] = useState([]);
  const [chose, setChoose] = useState(false);
  async function handleButton(event) {
    event.preventDefault();
    await fetchData(event.target.dataset.url, "areas");
    console.log(world)
    setChoose(true);
  }
  async function handleBackButton(event) {
    event.preventDefault();
    await fetchData(area, "results");
    setChoose(false);
  }
  useEffect(() => {
    fetchData(area, "results");
  }, []);

  return (
    <div>
      <WorldItems
        array={world}
        onBack={handleBackButton}
        onEntered={handleButton}
        showBackButton={chose}
      />
    </div>
  );
}

export default World;
