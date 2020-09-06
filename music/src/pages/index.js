import React from "react";
import "./style.css";
import { Link } from "gatsby";
import Article from "../components/article";
import Header from "../components/header";

export default function Home() {

  return (
    <div className="page-content">
      <Link to=".." className="go-back-to-homepage">GO BACK TO HOME PAGE</Link>
      <Header />
      <Article className="image-right a1" imgSrc="fomare.jpg" imgAlt="FOMARE">
        <header>

        </header>
        <section>

        </section>
      </Article>

      <Article className="image-right a2" imgSrc="kiki-vivi-lily.jpg" imgAlt="kiki vivi lily">
        <header>

        </header>
        <section>

        </section>
      </Article>

      <Article className="image-left a3" imgSrc="mrs-green-apple.jpg" imgAlt="Mrs. Green Apple">
        <header>

        </header>
        <section>

        </section>
      </Article>

      <Article className="image-left a4" imgSrc="lisa.jpg" imgAlt="LiSA">
        <header>

        </header>
        <section>

        </section>
      </Article>

      <Article className="image-right a5" imgSrc="frederic.jpg" imgAlt="Frederic">
        <header>

        </header>
        <section>

        </section>
      </Article>

      <Article className="image-right a6" imgSrc="otogivanashi.jpg" imgAlt="Otogivanashi">
        <header>

        </header>
        <section>

        </section>
      </Article>

      <Article className="image-left a7" imgSrc="the-cheserasera.jpg" imgAlt="The Cheserasera">
        <header>

        </header>
        <section>

        </section>
      </Article>

      <Article className="image-left a8" imgSrc="utada-hikaru.jpg" imgAlt="Utada Hikaru">
        <header>

        </header>
        <section>

        </section>
      </Article>

      <Article className="image-right a9" imgSrc="the-pillows.jpg" imgAlt="The Pillows">
        <header>

        </header>
        <section>

        </section>
      </Article>

      <Article className="image-right a10" imgSrc="aimer.jpg" imgAlt="Aimer">
        <header>

        </header>
        <section>

        </section>
      </Article>

      <Article className="image-left a11" imgSrc="asian-kung-fu-generation.jpg" imgAlt="Asian Kung-Fu Generation">
        <header>

        </header>
        <section>

        </section>
      </Article>

      <Article className="image-left a12" imgSrc="indigo-la-end.jpg" imgAlt="Indigo la End">
        <header>

        </header>
        <section>

        </section>
      </Article>
    </div>
  );
}
