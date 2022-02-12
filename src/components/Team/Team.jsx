import React from "react";
import { TeamCard } from "../TeamCard";
import { HeroInfo } from "../HeroInfo";

function getSumOfProperty(team, property) {
  return team
    .map((hero) => Number(hero.powerstats[property]) || 0)
    .reduce((a, b) => a + b, 0);
}

export function Team({ team, removeHeroFromTeam, showHeroInfo, selectedHero }) {
  const combat = getSumOfProperty(team, "combat");
  const durability = getSumOfProperty(team, "durability");
  const intelligence = getSumOfProperty(team, "intelligence");
  const power = getSumOfProperty(team, "power");
  const speed = getSumOfProperty(team, "speed");
  const strength = getSumOfProperty(team, "strength");

  const powerStats = [
    {
      name: "combat",
      value: combat,
    },
    {
      name: "durability",
      value: durability,
    },
    {
      name: "intelligence",
      value: intelligence,
    },
    {
      name: "power",
      value: power,
    },
    {
      name: "speed",
      value: speed,
    },
    {
      name: "strength",
      value: strength,
    },
  ];

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
      <div className="card-header h3 bg-primary-custom text-light">
        YOUR TEAM
      </div>
      <div className="card-body justify-content-center d-flex flex-wrap">
        <div className="w-75 ">
          <div className="h-75 d-flex flex-wrap justify-content-center align-content-center">
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
                <span className="text-center">
                  <em>It's empty!</em>
                  <p className="text-secondary-custom h6">
                    Start looking for your heroes below
                  </p>
                </span>
              </>
            )}
          </div>
          <div className="d-flex flex-column h-25 justify-content-end">
            <div className="text-muted">
              You have chosen{" "}
              <strong className="text-primary-custom">{team.length}/6</strong>{" "}
              heroes!
            </div>
            <HeroInfo selectedHero={selectedHero} />
          </div>
        </div>
        <div className="w-25">
          <div className="card text-center">
            <div className="card-header fw-bold bg-primary-custom text-light">
              TEAM POWERSTATS
            </div>
            <div className="p-2 d-flex flex-column align-items-center">
              {powerStats
                .sort((a, b) => b.value - a.value)
                .map((stat) => (
                  <div
                    key={stat.name}
                    className="card m-1"
                    style={{ width: "90%" }}
                  >
                    <div className="h6 p-1">
                      <p className="m-0 text-capitalize">{stat.name}</p>
                      <p className="m-0 ">{stat.value}</p>
                    </div>
                  </div>
                ))}
              <div className="bg-white">
                <div className="p-1">
                  Average Weight: {weight ? round(average(weight), 2) : "0"} kg.
                </div>
                <div className="p-1">
                  Average Height: {height ? round(average(height), 2) : "0"} cm.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
