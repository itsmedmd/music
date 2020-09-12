import React from "react";
import "./style.css";

export default function Article(props) {

  return (
    <article id={props.id} className={props.className}>
        {props.children}
        <aside>
            <img className="lazyloadd" src={props.imgSrc} alt={props.imgAlt} />
        </aside>
    </article>
  );
}
