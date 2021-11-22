import React, { useRef, useState } from "react";
import axios from "axios";

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
    // console.log(res.data.error);
    if (res.data.results) {
      setResults(res.data.results);
    } else {
      setResults([]);
    }
  }

  return (
    <>
      <div className="p-2">
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
            <ul>
              {results.map((element) => (
                <li key={element.id}>{element.name}</li>
              ))}
            </ul>
          ) : (
            <p>No results</p>
          )
        ) : null}
      </div>
    </>
  );
}
