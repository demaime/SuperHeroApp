import React from "react";
import { ResultCard } from "../ResultCard";

export function ResultsList({ results, addHeroToTeam }) {
  return (
    <div>
      {results != null ? (
        results.length > 0 ? (
          <div className="container-lg">
            <div className="row">
              {results.map((hero) => (
                <div key={hero.id} className="col-md-6">
                  <ResultCard hero={hero} addHeroToTeam={addHeroToTeam} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No results</p>
        )
      ) : null}
    </div>
  )
}
