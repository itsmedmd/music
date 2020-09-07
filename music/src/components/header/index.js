import React from "react";
import Song from "../song";

export default function Header() {

  return (
    <header className="page-header" >
        <aside>
        <img
          srcSet="header-480w.jpg 480w, header.jpg 910w"
          sizes="(max-width: 1024px) 480px, 910px"
          src="header.jpg"
          alt="A person walking along a relaxing urban city street at night in Japan"
        />
        </aside>
        <section>
            <Song number="01." text="FOMARE" />
            <Song number="02." text="kiki vivi lily" />
            <Song number="03." text="Aimer" />
            <Song number="04." text="Otogivanashi" />
            <Song number="05." text="Mrs. Green Apple" />
            <Song number="06." text="Uri Nakaya" />
            <Song number="07." text="The Cheserasera" />
            <Song number="08." text="Utada Hikaru" />
            <Song number="09." text="The Pillows" />
            <Song number="10." text="Frederic" />
            <Song number="11." text="Kanako Ito" />
            <Song number="12." text="Indigo la End" />
        </section>
    </header>
  );
}
