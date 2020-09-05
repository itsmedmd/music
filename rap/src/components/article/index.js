import React from "react";

export default function Article(props) {

  return (
    <article>
        <header>
            {props.children}
        </header>
        <section>
            <img src={props.imgSrc} alt={props.imgAlt} />
        </section>
    </article>
  );
}
