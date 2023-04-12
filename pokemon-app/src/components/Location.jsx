import React, { useEffect, useState } from 'react'

function Location () {
  const [encounters, setEncounters] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/location-area/115/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setEncounters(data.pokemon_encounters)
      })
      .catch((error) => {
        console.log('Error fetching data: ', error)
      })
  }, [])

  return (
    <ul>
      {encounters.map((encounter, index) => (
        <li key={index}>{encounter.url}</li>
      ))}
    </ul>
  )
}

export default Location
