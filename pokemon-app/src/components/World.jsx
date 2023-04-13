import React, { useState, useEffect } from "react";
import WorldItems from "./WorldItems";

function World({ onLocationSelect, setDisplayedComponent }) {
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
    setChoose(true);
  }
  async function handleBackButton(event) {
    event.preventDefault();
    await fetchData(area, "results");
    setChoose(false);
  }
  function sendInfoBack(event) {
    onLocationSelect(event.target.dataset.url);
    setDisplayedComponent("Location");
    console.log(event.target.dataset.url);
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
        onSend={sendInfoBack}
      />
    </div>
  );
}

export default World;
