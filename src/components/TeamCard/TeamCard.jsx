import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

export function TeamCard({ hero, team, setTeam }) {
  const [actualTeam, setActualTeam] = useState(team);

  const removeHeroFromTeam = (hero) => {
    setActualTeam(actualTeam.filter((item) => item.name !== hero.name));
    console.log(actualTeam);
    // setTeam(actualTeam);
  };

  return (
    <div
      className="card col-md col-6 m-1"
      style={{
        width: "18rem",
        backgroundColor:
          hero.biography.alignment === "good" ? "lightgreen" : "tomato",
      }}
    >
      <div className="card-body">
        <p className="card-text">{hero.name}</p>
        <IoIosCloseCircle
          onClick={() => removeHeroFromTeam(hero)}
          style={{
            height: "3rem",
            width: "3rem",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}
