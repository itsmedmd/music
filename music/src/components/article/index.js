import React from "react";

export default function Article(props) {

  return (
    <article className={props.className}>
        {props.children}
        <aside>
            <img src={props.imgSrc} alt={props.imgAlt} />
        </aside>
    </article>
  );
}
