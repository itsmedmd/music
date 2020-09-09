import React from "react";
import Song from "../song";
import "./style.css";

export default function Header() {

  return (
    <header className="page-header" >
        <section>
            <div className="song-column">
              <Song href="#1" number="01." text="Frederic" />
              <Song href="#2" number="02." text="Mrs. Green Apple" />
              <Song href="#3" number="03." text="Otogivanashi" />
              <Song href="#4" number="04." text="Utada Hikaru" />
              <Song href="#5" number="05." text="FOMARE" />
              <Song href="#6" number="06." text="Uri Nakayama" />
            </div>
            <div className="song-column">
              <Song href="#7" number="07." text="Aimer" />
              <Song href="#8" number="08." text="The Cheserasera" />
              <Song href="#9" number="09." text="kiki vivi lily" />
              <Song href="#10" number="10." text="The Pillows" />
              <Song href="#11" number="11." text="Kanako Ito" />
              <Song href="#12" number="12." text="Indigo la End" />
            </div>
        </section>
    </header>
  );
}
