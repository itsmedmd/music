import React, { useEffect } from "react";
import "./style.css";
import { Link } from "gatsby";
import Article from "../components/article";
import Header from "../components/header";
import LazyLoad from "vanilla-lazyload";

export default function Home() {
  useEffect(function() {
    // Initialize lazyload one time for the entire application
    if (!document.lazyLoadInstance)
      document.lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazyload",
        threshold: 1000
      });
  }, []);

  return (
    <div className="page-content">
      <Link to=".." className="go-back-to-homepage">GO BACK TO HOME PAGE</Link>
      <Link to="#page-start" className="go-back-to-start">Go to top</Link>
      <Header />

      <Article id="1" className="image-right a4" imgSrc="frederic.jpg" imgAlt="Frederic">
        <header className="header-top">
          <span>01.</span>
          <h1>Frederic</h1>
        </header>
        <header className="header-bottom"><h1>Frederic</h1></header>
        <section>
          <h2>Learn more: <a target="_blank" rel="noreferrer" href="https://frederic-official.com" >frederic-official.com</a></h2>
          <h2>Listen to<br/> their music: <br/> <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCeoCO4_u1DdJBwyil66IsNw" >YouTube</a></h2>
        </section>
      </Article>

      <Article id="2" className="image-right a6" imgSrc="mrs-green-apple.jpg" imgAlt="Mrs. Green Apple">
        <header className="header-top">
          <span>02.</span>
          <h1>Mrs. Green Apple</h1>
        </header>
        <header className="header-bottom"><h1>Mrs. Green Apple</h1></header>
        <section>
          <h2>Learn more: <a target="_blank" rel="noreferrer" href="https://mrsgreenapple.com" >mrsgreenapple.com</a></h2>
          <h2>Listen to<br/> their music: <br/> <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCpFgmZm65yOU5X-hmWkWjuw" >YouTube</a></h2>
        </section>
      </Article>

      <Article id="3" className="image-left a5" imgSrc="otogivanashi.jpg" imgAlt="Otogivanashi">
        <header className="header-top">
          <span>03.</span>
          <h1>Otogivanashi</h1>
        </header>
        <header className="header-bottom"><h1>Otogivanashi</h1></header>
        <section>
          <h2>Learn more: <a target="_blank" rel="noreferrer" href="http://otogivanashi.com" >otogivanashi.com</a></h2>
          <h2>Listen to<br/> their music: <br/> <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCd4QzATsDnJqvwG9pmmX6NA" >YouTube</a></h2>
        </section>
      </Article>

      <Article id="4" className="image-left a8" imgSrc="utada-hikaru.jpg" imgAlt="Utada Hikaru">
        <header className="header-top">
          <span>04.</span>
          <h1>Utada Hikaru</h1>
        </header>
        <header className="header-bottom"><h1>Utada Hikaru</h1></header>
        <section>
          <h2>Learn more: <a target="_blank" rel="noreferrer" href="http://www.utadahikaru.jp" >utadahikaru.jp</a></h2>
          <h2>Listen to<br/> her music: <br/> <a target="_blank" rel="noreferrer" href="https://www.youtube.com/user/hikki" >YouTube</a></h2>
        </section>
      </Article>

      <Article id="5" className="image-right a1" imgSrc="fomare.jpg" imgAlt="FOMARE">
        <header className="header-top">
          <span>05.</span>
          <h1>FOMARE</h1>
        </header>
        <header className="header-bottom"><h1>FOMARE</h1></header>
        <section>
          <h2>Learn more: <a target="_blank" rel="noreferrer" href="http://fomare.com" >fomare.com</a></h2>
          <h2>Listen to<br/> their music: <br/> <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCg5RYtF2Lofxb9L3A3sgitA" >YouTube</a></h2>
        </section>
      </Article>

      <Article id="6" className="image-right a3" imgSrc="uri-nakayama.jpg" imgAlt="Uri Nakayama">
        <header className="header-top">
          <span>06.</span>
          <h1>Uri Nakayama</h1>
        </header>
        <header className="header-bottom"><h1>Uri Nakayama</h1></header>
        <section>
          <h2>Learn more: <a target="_blank" rel="noreferrer" href="http://nakayamauri.com" >nakayamauri.com</a></h2>
          <h2>Listen to<br/> her music: <br/> <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC1fe2bJKfcR_PFCV7DJWmug/featured" >YouTube</a></h2>
        </section>
      </Article>

      <Article id="7" className="image-left a10" imgSrc="aimer.jpg" imgAlt="Aimer">
        <header className="header-top">
          <span>07.</span>
          <h1>Aimer</h1>
        </header>
        <header className="header-bottom"><h1>Aimer</h1></header>
        <section>
          <h2>Learn more: <a target="_blank" rel="noreferrer" href="https://www.aimer-web.jp" >aimer-web.jp</a></h2>
          <h2>Listen to<br/> her music: <br/> <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCR1zT1s524Hbc85bdvno_8w" >YouTube</a></h2>
        </section>
      </Article>

      <Article id="8" className="image-left a7" imgSrc="the-cheserasera.jpg" imgAlt="The Cheserasera">
        <header className="header-top">
          <span>08.</span>
          <h1>The Cheserasera</h1>
        </header>
        <header className="header-bottom"><h1>The Cheserasera</h1></header>
        <section>
          <h2>Learn more: <a target="_blank" rel="noreferrer" href="http://www.thecheserasera.com" >thecheserasera.com</a></h2>
          <h2>Listen to<br/> their music: <br/> <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/TheCheserasera_japan" >YouTube</a></h2>
        </section>
      </Article>

      <Article id="9" className="image-right a2" imgSrc="kiki-vivi-lily.jpg" imgAlt="kiki vivi lily">
        <header className="header-top">
          <span>09.</span>
          <h1>kiki vivi lily</h1>
        </header>
        <header className="header-bottom"><h1>kiki </h1><h1>vivi lily</h1></header>
        <section>
          <h2>Learn more: <a target="_blank" rel="noreferrer" href="https://kikivivilily.com/" >kikivivilily.com</a></h2>
          <h2>Listen to<br/> her music: <br/> <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC2qqLtG-gC_2MHj_-t_F13w" >YouTube</a></h2>
        </section>
      </Article>

      <Article id="10" className="image-right a9" imgSrc="the-pillows.jpg" imgAlt="The Pillows">
        <header className="header-top">
          <span>10.</span>
          <h1>The Pillows</h1>
        </header>
        <header className="header-bottom"><h1>The Pillows</h1></header>
        <section>
          <h2>Learn more: <a target="_blank" rel="noreferrer" href="http://pillows.jp" >pillows.jp</a></h2>
          <h2>Listen to<br/> their music: <br/> <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCJFJuYpd7mMeC9mZVdTqV1g" >YouTube</a></h2>
        </section>
      </Article>

      <Article id="11" className="image-left a11" imgSrc="kanako-ito.jpg" imgAlt="Kanako Ito">
        <header className="header-top">
          <span>11.</span>
          <h1>Kanako Ito</h1>
        </header>
        <header className="header-bottom"><h1>Kanako Ito</h1></header>
        <section>
          <h2>Learn more: <a target="_blank" rel="noreferrer" href="https://kanataro.amebaownd.com" >kanataro.com</a></h2>
          <h2>Listen to<br/> her music: <br/><a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCpFgEr3XUXk_8wK8H9Dn6Cg" >YouTube</a></h2>
        </section>
      </Article>

      <Article id="12" className="image-left a12" imgSrc="indigo-la-end.jpg" imgAlt="Indigo la End">
        <header className="header-top">
          <span>12.</span>
          <h1>Indigo la End</h1>
        </header>
        <header className="header-bottom"><h1>Indigo </h1><h1>la End</h1></header>
        <section>
          <h2>Learn more: <a target="_blank" rel="noreferrer" href="https://indigolaend.com" >indigolaend.com</a></h2>
          <h2>Listen to<br/> their music: <br/> <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCXKSbzihU5cu0U4qbbjB3GA" >YouTube</a></h2>
        </section>
      </Article>
    </div>
  );
}
