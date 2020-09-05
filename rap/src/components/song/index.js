import React from "react";

export default function Song(props) {

  return (
    <div className="song" >
        <p className="song-name">
            <span className="song-number">{props.number}</span>
            {props.text}
        </p>
    </div>
  );
}
