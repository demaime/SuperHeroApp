import React from "react";
import { TeamCard } from "../TeamCard";
import { HeroInfo } from "../HeroInfo";

export function Team({ team, removeHeroFromTeam, showHeroInfo, selectedHero }) {
  const combat = team
    .map((hero) => Number(hero.powerstats.combat) || 0)
    .reduce((a, b) => a + b, 0);

  const durability = team
    .map((hero) => Number(hero.powerstats.durability) || 0)
    .reduce((a, b) => a + b, 0);

  const intelligence = team
    .map((hero) => Number(hero.powerstats.intelligence) || 0)
    .reduce((a, b) => a + b, 0);

  const power = team
    .map((hero) => Number(hero.powerstats.power) || 0)
    .reduce((a, b) => a + b, 0);

  const speed = team
    .map((hero) => Number(hero.powerstats.speed) || 0)
    .reduce((a, b) => a + b, 0);

  const strength = team
    .map((hero) => Number(hero.powerstats.strength) || 0)
    .reduce((a, b) => a + b, 0);

  const height = team.map((hero) =>
    Number(hero.appearance.height[1].replace(/[^0-9.]+/g, ""))
  );

  const weight = team.map((hero) =>
    Number(hero.appearance.weight[1].replace(/[^0-9.]+/g, ""))
  );

  const average = (array) =>
    array.reduce((a, b) => a + b, 0) / array.length || 0;

  function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  }

  return (
    <div className="card text-center">
      <div className="card-header h3 bg-primary-custom">YOUR TEAM</div>
      <div className="card-body justify-content-center d-flex flex-wrap">
        {team.length > 0 ? (
          team.map((hero) => (
            <TeamCard
              key={hero.id}
              hero={hero}
              removeHeroFromTeam={removeHeroFromTeam}
              showHeroInfo={showHeroInfo}
            />
          ))
        ) : (
          <>
            <p> </p>
            <span>
              <em>It's empty!</em>
              <p className="text-secondary-custom h6">
                Start looking for your heroes below
              </p>
            </span>
          </>
        )}
      </div>
      <div className="card-footer text-muted">
        You have chosen{" "}
        <strong className="text-primary-custom">{team.length}/6</strong> heroes!
      </div>
      <HeroInfo selectedHero={selectedHero} />
      <div className="card text-center mt-2">
        <div className="card-header h4 bg-primary-custom">TEAM POWERSTATS</div>
        <div className="card-body row justify-content-center">
          <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
            <div className="card-body h5">
              <p className="card-text">Combat</p>
              <p className="card-text text-secondary-custom">{combat}</p>
            </div>
          </div>
          <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
            <div className="card-body h5">
              <p className="card-text">Durability</p>
              <p className="card-text text-secondary-custom">{durability}</p>
            </div>
          </div>
          <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
            <div className="card-body h5">
              <p className="card-text">Intelligence</p>
              <p className="card-text text-secondary-custom">{intelligence}</p>
            </div>
          </div>
          <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
            <div className="card-body h5">
              <p className="card-text">Power</p>
              <p className="card-text text-secondary-custom">{power}</p>
            </div>
          </div>
          <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
            <div className="card-body h5">
              <p className="card-text">Speed</p>
              <p className="card-text text-secondary-custom">{speed}</p>
            </div>
          </div>
          <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
            <div className="card-body h5">
              <p className="card-text">Strength</p>
              <p className="card-text text-secondary-custom">{strength}</p>
            </div>
          </div>
          <div className="card-footer row bg-white">
            <div className="col">
              Average Weight: {weight ? round(average(weight), 2) : "0"} kg.
            </div>
            <div className="col">
              Average Height: {height ? round(average(height), 2) : "0"} cm.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
