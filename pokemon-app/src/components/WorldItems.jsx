import React, { useState, useEffect } from 'react';

function WorldItems({array, onEntered, onBack, showBackButton}) {
  if (array.length === 0 && showBackButton) {
    return <h2>
      You accidantely time travelled by chosing a world that doesn't exist yet! 
      Please go back to the current present! 
      <br></br>
    <button onClick={onBack}>Back to the World!</button>
    </h2>
  } else {
  return array.map((e, index) => (
    <div key={index}>
      <h2>
        {e.name
          .replaceAll("-", " ")
          .split(" ")
          .map((el) => el.charAt(0).toUpperCase() + el.slice(-(el.length - 1)))
          .join(" ")}
      </h2>
      <button onClick={onEntered} data-url={e.url}>
      { showBackButton && 'Enter the arena!' }
      { showBackButton || 'Enter the area!' }
      </button>
      {showBackButton && <button onClick={onBack}>Back to the World!</button>}
    </div>
  ));
}
}

export default WorldItems;
