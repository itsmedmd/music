import React from "react";
import Song from "../song";

export default function Header() {

  return (
    <header className="page-header" >
        <section>
            <div className="song-column">
              <Song number="01." text="FOMARE" />
              <Song number="02." text="kiki vivi lily" />
              <Song number="03." text="Aimer" />
              <Song number="04." text="Otogivanashi" />
              <Song number="05." text="Mrs. Green Apple" />
              <Song number="06." text="Uri Nakaya" />
            </div>
            <div className="song-column">
              <Song number="07." text="The Cheserasera" />
              <Song number="08." text="Utada Hikaru" />
              <Song number="09." text="The Pillows" />
              <Song number="10." text="Frederic" />
              <Song number="11." text="Kanako Ito" />
              <Song number="12." text="Indigo la End" />
            </div>
        </section>
    </header>
  );
}
