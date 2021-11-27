import React from "react";
import { IoIosCloseCircle, IoMdInformationCircle } from "react-icons/io";

export function TeamCard({ hero, team, setTeam }) {
  const removeHeroFromTeam = (hero) => {
    setTeam(team.filter((item) => item.name !== hero.name));
  };

  const showHeroInfo = (hero) => {
    console.log(hero.name);
  };

  return (
    <div
      className="container p-0 d-flex m-1 justify-content-center rounded"
      style={{
        padding: "0",
        width: "12rem",
        height: "20rem",
        backgroundColor:
          hero.biography.alignment === "good" ? "palegreen" : "lightpink",
      }}
    >
      <div className="w-100 p-0">
        <img src={hero.image.url} className="h-75 rounded w-100" alt="..." />
        <p className="h6 mt-2">{hero.name}</p>
        <IoIosCloseCircle
          onClick={() => removeHeroFromTeam(hero)}
          style={{
            margin: "0 0.5rem",
            height: "1.5rem",
            width: "1.5rem",
            cursor: "pointer",
          }}
        />
        <IoMdInformationCircle
          onClick={() => showHeroInfo(hero)}
          style={{
            margin: "0 0.5rem",
            height: "1.5rem",
            width: "1.5rem",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}
