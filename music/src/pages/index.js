import React from "react";
import "./style.css";
import { Link } from "gatsby";
import Article from "../components/article";
import Header from "../components/header";

export default function Home() {

  return (
    <div className="page-content">
      <Link to=".." className="go-back-to-homepage">GO BACK TO HOME PAGE</Link>
      <Header className="page-header" />
      <Article className="image-left" imgSrc="snoop.jpg" imgAlt="Snoop Dogg">
      </Article>
      <Article className="image-right" imgSrc="snoop.jpg" imgAlt="Snoop Dogg">
      </Article>
      <Article className="image-right" imgSrc="snoop.jpg" imgAlt="Snoop Dogg">
      </Article>
      <Article className="image-left" imgSrc="snoop.jpg" imgAlt="Snoop Dogg">
      </Article>
      <Article className="image-left" imgSrc="snoop.jpg" imgAlt="Snoop Dogg">
      </Article>
      <Article className="image-right" imgSrc="snoop.jpg" imgAlt="Snoop Dogg">
      </Article>
      <Article className="image-right" imgSrc="snoop.jpg" imgAlt="Snoop Dogg">
      </Article>
    </div>
  );
}
