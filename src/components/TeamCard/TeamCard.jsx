import React from "react";
import { IoIosCloseCircle, IoIosInformationCircle } from "react-icons/io";
import "./TeamCard.css";

export function TeamCard({ hero, removeHeroFromTeam, showHeroInfo }) {
  return (
    <div
      className="d-flex m-1 rounded heroCardInTeam"
      style={{
        padding: "0",
        cursor: "pointer",
        backgroundColor:
          hero.biography.alignment === "good" ? "palegreen" : "lightpink",
      }}
    >
      <div className="w-100 p-0">
        <div className="imageHeroCard rounded w-100 d-flex">
          <img
            src={hero.image.url}
            className="h-100 rounded w-100"
            alt="Not found"
          />
        </div>
        <div className="d-flex flex-column m-0 justify-content-between heroNameAndButtons">
          <p className="m-0 heroNameInCard">{hero.name}</p>
          <div>
            <IoIosInformationCircle
              className="infoHeroButton"
              onClick={() => showHeroInfo(hero)}
              style={{
                margin: "0 0.5rem",
                height: "1.5rem",
                width: "1.5rem",
                cursor: "pointer",
              }}
            />
            <IoIosCloseCircle
              className="removeHeroButton"
              onClick={() => removeHeroFromTeam(hero)}
              style={{
                margin: "0 0.5rem",
                height: "1.5rem",
                width: "1.5rem",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
