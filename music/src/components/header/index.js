import React from "react";
import Song from "../song";

export default function Header() {

  return (
    <header className="page-header" >
        <aside>
            <img
                src="header.jpg"
                alt="Relaxing city street at night in Japan"
            />
        </aside>
        <section>
            <Song number="01." text="satomoka - melt bitter" />
            <Song number="02." text="猫戦 - 鶴" />
            <Song number="03." text="crap clap - The time" />
            <Song number="04." text="pont - ディスコタウン" />
            <Song number="05." text="ベルマインツ - 流星タクシー" />
            <Song number="06." text="FENNEC FENNEC - Going Down" />
            <Song number="07." text="Mao Uchu - 潮騒" />
            <Song number="08." text="MINT mate box - メイクキュート" />
            <Song number="09." text="WHY@DOLL - KIMI WA STEADY" />
            <Song number="10." text="彼女のサーブ&レシーブ - Cheerio !" />
            <Song number="11." text="clammbon - Lush Life!" />
            <Song number="12." text="ZETTAKUN - sleep sleep feat SATOMOKA" />
            <Song number="13." text="ONIGAWARA - Don't stop POPMUSIC" />
            <Song number="14." text="saji - 猫と花火" />
            <Song number="15." text="dramastore - 可愛い子にはトゲがある" />
        </section>
    </header>
  );
}

{/* <img
srcSet="header-480w.jpg 480w, header.jpg 910w"
sizes="(max-width: 1024px) 480px, 910px"
src="header.jpg"
alt="Relaxing city street at night in Japan"
/> */}
