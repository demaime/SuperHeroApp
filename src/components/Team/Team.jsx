import React from "react";
import { TeamCard } from "../TeamCard";

export function Team({ team, setTeam }) {
  function add(a, b) {
    return a + b;
  }

  //   const combat = team.map((hero) => hero.powerstats.combat).reduce(add);
  //no funciona aún
  console.log(combat);

  return (
    <div className="card text-center">
      <div className="card-header h3">YOUR TEAM</div>
      <div className="card-body row justify-content-center">
        {team.length > 0 ? (
          team.map((hero) => (
            <TeamCard key={hero.id} hero={hero} team={team} setTeam={setTeam} />
          ))
        ) : (
          <p className>
            <em>It's empty!</em>
          </p>
        )}
      </div>
      <div className="card-footer text-muted">
        You have chosen {team.length}/6 heroes!
      </div>
      <div className="card text-center mt-2">
        <div className="card-header h4">TEAM POWERSTATS</div>
        <div className="card-body row justify-content-center">
          <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Combat</p>
              <p className="card-text">65</p>
            </div>
          </div>
          <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Durability</p>
              <p className="card-text">65</p>
            </div>
          </div>
          <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Intelligence</p>
              <p className="card-text">65</p>
            </div>
          </div>
          <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Power</p>
              <p className="card-text">65</p>
            </div>
          </div>
          <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Speed</p>
              <p className="card-text">65</p>
            </div>
          </div>
          <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Strength</p>
              <p className="card-text">65</p>
            </div>
          </div>
          <div className="card-footer row bg-white">
            <div className="col">Average Weight: 85kg.</div>
            <div className="col">Average Height: 1.68 mts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
