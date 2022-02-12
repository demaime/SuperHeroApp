import React from "react";
import { IoIosAddCircle } from "react-icons/io";

export function ResultCard({ hero, addHeroToTeam }) {
  return (
    <div
      className="card m-2 p-20"
      style={{
        boxShadow:
          hero.biography.alignment === "good"
            ? "2px 2px 2px palegreen"
            : "2px 2px 2px lightpink",
      }}
    >
      <div className="row p-2">
        <div className="rounded-circle7 col">
          <img
            style={{
              height: "5rem",
              width: "5rem",
            }}
            className="rounded-circle col"
            src={hero.image.url}
            alt="Not found"
          />
        </div>
        <div className="col-6 align-items-center h4 d-flex">{hero.name}</div>
        <div className="col d-flex align-items-center">
          <IoIosAddCircle
            onClick={() => addHeroToTeam(hero)}
            style={{
              height: "3rem",
              width: "3rem",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}
