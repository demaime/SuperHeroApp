import React, { useState, useRef } from "react";
import axios from "axios";
import { ResultsList } from "../../components/ResultsList";
import { Team } from "../../components/Team";

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
      <Team team={team} setTeam={setTeam} />
      <div className="bg-light">
        <div className="p-2 container-sm d-flex justify-content-center">
          <input className="me-2" type="text" name="" id="" ref={herosearch} />

          <button className="btn btn-primary" onClick={search}>
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
