import React from "react";

export function HeroCard({ hero }) {
  return (
    <div className="card m-2 p-1 d-inline-block row">
      <div className="card-title col-6">{hero.name}</div>
      <img
        className="rounded-circle col-6"
        src={hero.image.url}
        alt="Image not found"
      />
      {/* <div className="card-body">
        <ul>
          <li className="card-text">Combat: {hero.powerstats.combat}</li>
          <li className="card-text">
            Durability: {hero.powerstats.durability}
          </li>
          <li className="card-text">
            Intelligence: {hero.powerstats.intelligence}
          </li>
          <li className="card-text">Power: {hero.powerstats.power}</li>
          <li className="card-text">Speed: {hero.powerstats.speed}</li>
          <li className="card-text">Strength: {hero.powerstats.strength}</li>
        </ul>
      </div> */}
    </div>
  );
}
