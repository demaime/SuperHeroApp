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

  // useEffect(() => {
  //   POSIBLE OPCION PARA QUE "NO RESULTS" NO APAREZCA AL INICIO
  // }, []);

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
    const heroInTeam = team.find((hero) => hero.id === clickedHero.id);
    if (heroInTeam) {
      console.log(heroInTeam.name, "is already in team");
      return;
    }
    if (team.length >= 6) return;

    setTeam([...team, clickedHero]);
    console.log("Your team is:", team);
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center">
        <img
          src="logo.png"
          alt=""
          style={{
            width: "6rem",
            height: "5rem",
            margin: "0.5rem",
          }}
        />
        <img
          src="title.png"
          alt=""
          style={{
            width: "16rem",
            height: "4rem",
            margin: "1rem 0",
          }}
        />
      </div>
      <Team team={team} setTeam={setTeam} />
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
            id=""
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
