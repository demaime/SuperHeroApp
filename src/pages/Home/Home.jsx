import React, { useState, useRef } from "react";
import axios from "axios";
import { ResultsList } from "../../components/ResultsList";
import { Team } from "../../components/Team";
import "./Home.css";

export function Home() {
  const accessToken = 6728050277235129;
  const [team, setTeam] = useState([]);
  const herosearch = useRef();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedHero, setSelectedHero] = useState();

  async function search() {
    setIsLoading(true);
    let res = await axios.get(
      `https://superheroapi.com/api.php/${accessToken}/search/${herosearch.current.value}`
    );
    setIsLoading(false);
    if (res.data.results) {
      setResults(res.data.results);
    } else {
      setResults([]);
    }
  }

  const addHeroToTeam = (clickedHero) => {
    if (team.length === 0) {
      setTeam([...team, clickedHero]);
      return;
    }

    const heroInTeam = team.find((hero) => hero.id === clickedHero.id);

    if (heroInTeam) {
      console.log(heroInTeam.name, "is already in team");
      return;
    }

    if (team.length >= 6) return;

    if (clickedHero.biography.alignment === "good") {
      const amountOfGoodHeroes = team.filter(
        (hero) => hero.biography.alignment === "good"
      ).length;

      if (amountOfGoodHeroes === 3) {
        console.log(
          "You have already selected 3 heroes with the same alignment"
        );
      } else {
        setTeam([...team, clickedHero]);
      }
    } else {
      const amountOfBadHeroes = team.filter(
        (hero) => hero.biography.alignment === "bad"
      ).length;

      if (amountOfBadHeroes === 3) {
        console.log(
          "You have already selected 3 heroes with the same alignment"
        );
      } else {
        setTeam([...team, clickedHero]);
      }
    }
  };

  const removeHeroFromTeam = (clickedHero) => {
    console.log(clickedHero, team);
    const heroTobeRemoved = team.find((hero) => hero.id === clickedHero.id);
    setTeam(team.filter((item) => item.id !== heroTobeRemoved.id));
    setSelectedHero(null);
  };

  const showHeroInfo = (clickedHero) => {
    const heroInTeam = team.find((hero) => hero.id === clickedHero.id);
    setSelectedHero(heroInTeam);
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center">
        <img
          src="logoHome.png"
          alt=""
          style={{
            width: "7rem",
            height: "6rem",
            margin: "0.5rem",
          }}
        />
        <img
          src="titleHome.png"
          alt=""
          style={{
            width: "20rem",
            height: "6rem",
            margin: "0.5rem 0",
          }}
        />
      </div>
      <Team
        team={team}
        setTeam={setTeam}
        removeHeroFromTeam={removeHeroFromTeam}
        showHeroInfo={showHeroInfo}
        selectedHero={selectedHero}
      />
      <div className="bg-light text-center">
        <p className="text-secondary-custom h5 text-center p-2">
          Find your heroes:
        </p>
        <div className="p-2 container-sm d-flex justify-content-center">
          <input
            id="search-input"
            className="me-2"
            type="text"
            name=""
            ref={herosearch}
          />

          <button className="btn bg-primary-custom" onClick={search}>
            Search
          </button>
        </div>
      </div>
      <div>
        {isLoading ? (
          <p>Searching...</p>
        ) : (
          <ResultsList results={results} addHeroToTeam={addHeroToTeam} />
        )}
      </div>
    </>
  );
}
