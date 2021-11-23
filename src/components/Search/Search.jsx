import React, { useRef, useState } from "react";
import axios from "axios";
import { HeroCard } from "../HeroCard/";

export function Search() {
  const accessToken = 6728050277235129;

  const herosearch = useRef();

  const [results, setResults] = useState();
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <>
      <div className="p-2 ">
        <input
          className="me-2"
          type="text"
          name=""
          id=""
          // onKeyDown={search}
          ref={herosearch}
        />
        <button className="btn btn-primary" onClick={search}>
          Search
        </button>
      </div>
      <div>
        {isLoading ? (
          <p>Searching...</p>
        ) : results ? (
          results.length > 0 ? (
            <div className="container-lg">
              <div className="row">
                {results.map((hero) => (
                  <div className="col-12 col-md-4 col-lg-4">
                    <HeroCard hero={hero} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No results</p>
          )
        ) : null}
      </div>
    </>
  );
}
