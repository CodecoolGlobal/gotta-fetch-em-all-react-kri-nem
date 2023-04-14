import React, { useState, useEffect } from "react";

function WorldItems({ array, onEntered, onBack, showBackButton, onSend }) {
  if (array.length === 0 && showBackButton) {
    return (
      <div id="Error404" className="Error">
      <h2>
        You accidantely time travelled to a world that doesn't exist
        yet! <br></br>
        Please don't break space-time continuum!
        <br></br>
        <button className="errorback" onClick={onBack}> Hurry back to our present!</button>
      </h2>
      </div>
    );
  } else if (array.length >= 1 && showBackButton) {
    return <div className="welcome">
      <h2>Welcome to this Poké Area!</h2>
      {array.map((e, index) => (
      <div id={"Area" + (index + 1)} className="Area" key={index}>
        <button onClick={onSend} data-url={e.url}>
          {e.name
            .replaceAll("-", " ")
            .split(" ")
            .map(
              (el) => el.charAt(0).toUpperCase() + el.slice(-(el.length - 1))
            )
            .join(" ")}
                  </button>
      </div>
    ))}
    <button className="back" onClick={onBack}>Back to the World!</button>
    </div>
  } else if (array.length >= 1) {
    return array.map((e, index) => (
      <div id={"World" + (index + 1)} className="World" key={index}>
      <button onClick={onEntered} data-url={e.url}>
          {e.name
            .replaceAll("-", " ")
            .split(" ")
            .map(
              (el) => el.charAt(0).toUpperCase() + el.slice(-(el.length - 1))
            )
            .join(" ")}
        </button>
      </div>
    ));
}}

export default WorldItems;
