import React from "react";

export function HeroInfo({ selectedHero }) {
  if (selectedHero != null) {
    return (
      <div className="containter bg-primary-custom text-decoration-none p-2">
        <div className="h4">{selectedHero.name}</div>
        <div>Weight: {selectedHero.appearance.weight[1]}</div>
        <div>Height: {selectedHero.appearance.height[1]}</div>
        <div>
          Aliases:
          {selectedHero.biography.aliases.map((alias) => (
            <p className="mt-2">{alias}</p>
          ))}
        </div>
        <div>Eye-Color: {selectedHero.appearance["eye-color"]}</div>
        <div>Hair-Color: {selectedHero.appearance["hair-color"]}</div>
        <div>Work Place: {selectedHero.work.base}</div>
      </div>
    );
  } else {
    return (
      <div
        className="containter bg-primary-custom text-decoration-none p-2 text-light"
        style={{ marginRight: "16px" }}
      >
        Select any hero to see more info
      </div>
    );
  }
}
