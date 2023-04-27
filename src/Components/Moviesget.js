import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
const Moviesget = () => {
  const [api, setapi] = useState([]);
  const [search, setsearch] = useState("");
  const moiveget = () => {
    axios
      .get(`http://www.omdbapi.com/?s=${search}&apikey=e48c669b`)

      .then((res) => {
        if (res.data.Search) {
          setapi(res.data.Search);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    moiveget();
  });

  return (
    <>
      <div className="header-one">
        <br></br> Movies
      </div>
      <div>
        <input
          className="search-one"
          type="search"
          value={search}
          onChange={(e) => setsearch(e.targestat.value)}
        ></input>
      </div>

      <div>
        {api.map((get, imdbID) => {
          return (
            <>
              <div className="for-movie-flex" key={imdbID}>
                <ol>
                  <img src={get.Poster} alt="Image" />
                </ol>
                <li>{get.Title}</li>

                <li> Year : {get.Year}</li>
                <li> Type : {get.Type}</li>
              </div>
            </>
          );
        })}
      </div>

      <div>
        <h5 className="last"> All &#169; Reserved By Yash Parmar</h5>
      </div>
    </>
  );
};

export default Moviesget;
