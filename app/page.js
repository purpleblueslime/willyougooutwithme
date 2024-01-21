"use client";

import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [please, $please] = useState(false);
  const [p, $p] = useState(null);

  const prettyPlease = () => {
    $please(!please);
  };

  const nope = () => {
    const x = Math.random() * 90;
    const y = Math.random() * 90;

    $p({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div className="box" style={{ width: "100%" }}>
      <img
        alt={please ? "capoo excited" : "capoo flowers"}
        className="gif"
        src={please ? "/capoo-excited.gif" : "/capoo-flowers.gif"}
      />
      <div
        style={{
          width: "100%",
          paddingRight: "15px",
          textAlign: "center",
          fontSize: "25px"
        }}
      >
        Will you be my Valentine Kgopotso ?
      </div>
      <div className="btns">
        <Link className="yes" href="/yay">
          <button onMouseOver={prettyPlease} onMouseOut={prettyPlease}>
            Yes
          </button>
        </Link>
        <button
          className="no"
          style={p ? { position: "absolute", top: p.x, right: p.y } : null}
          onClick={nope}
          onMouseOver={nope}
        >
          No
        </button>
      </div>
    </div>
  );
}
