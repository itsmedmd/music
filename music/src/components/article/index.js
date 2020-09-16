import React from "react";
import "./style.css";

export default function Article(props) {
  let srcWithRemovedExtension = props.imgSrc.split(".");

  return (
    <article id={props.id} className={props.className}>
        {props.children}
        <aside>
            <img
              className="lazyload"
              src={`${srcWithRemovedExtension[0]}-lowq.${srcWithRemovedExtension[1]}`}
              data-src={props.imgSrc}
              alt={props.imgAlt}
            />
        </aside>
    </article>
  );
}