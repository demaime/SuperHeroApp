import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

export function TeamCard({ hero }) {
  const removeHeroFromTeam = (hero) => {
    console.log(hero);
  };
  return (
    <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
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
