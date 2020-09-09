import React from "react";
import { Link } from "gatsby";

export default function Song(props) {

  return (
    <div className="song" >
        <Link className="song-name" to={props.href}>
            <span className="song-number">{props.number}</span>
            {props.text}
        </Link>
    </div>
  );
}
