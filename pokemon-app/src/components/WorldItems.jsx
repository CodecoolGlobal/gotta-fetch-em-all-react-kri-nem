import React, { useState, useEffect } from "react";

function WorldItems({ array, onEntered, onBack, showBackButton, onSend }) {
  if (array.length === 0 && showBackButton) {
    return (
      <h2>
        You accidantely time travelled to a world that doesn't exist
        yet! <br></br>
        Please don't break space-time continuum!
        <br></br>
        <button onClick={onBack}> Hurry back to our present!</button>
      </h2>
    );
  } else if (array.length >= 1 && showBackButton) {
    return array.map((e, index) => (
      <div key={index}>
        <h2>  
          {e.name
            .replaceAll("-", " ")
            .split(" ")
            .map(
              (el) => el.charAt(0).toUpperCase() + el.slice(-(el.length - 1))
            )
            .join(" ")}
        </h2>
        <button onClick={onSend} data-url={e.url}>
          Enter the arena!
                  </button>
        <button onClick={onBack}>Back to the World!</button>
      </div>
    ))
  } else if (array.length >= 1) {
    return array.map((e, index) => (
      <div key={index}>
        <h2>
          {e.name
            .replaceAll("-", " ")
            .split(" ")
            .map(
              (el) => el.charAt(0).toUpperCase() + el.slice(-(el.length - 1))
            )
            .join(" ")}
        </h2>
        <button onClick={onEntered} data-url={e.url}>
          Enter the area!
        </button>
      </div>
    ));
}}

export default WorldItems;
