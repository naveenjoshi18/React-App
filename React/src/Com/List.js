import React, { Fragment, useEffect, useState } from "react";



const List = () => {
  const [movies, setmovies] = useState([]);

  //delete function
  const deletemovie = async id => {
    try {
      const deletemovie = await fetch(`http://localhost:5000/movies/${id}`, {
        method: "DELETE"
      });

      setmovies(movies.filter(movie => movie.movie_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  var [genrefilter,setgenrefilter]=useState("");
  
  const getmovies = async () => {
    try {
      const response = await fetch("http://localhost:5000/movies");
      const jsonData = await response.json();

      setmovies(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  
    useEffect(() => {
        getmovies();
      }, []);
 
  console.log(movies);

  return (
    <Fragment>
        <div className="container p-5">
            <select
            className="custom-select"
            onChange={(e)=> {
                const selectgenre=e.target.value;
                setgenrefilter(selectgenre);
            }}>
                <option value="">All</option>
                <option value="sci-fi" >Sci-Fi</option>
                <option value="drama" >Drama</option>
                <option value="crime">Crime</option>
                <option value="comedy">Comedy</option>
                <option value="romantic">Romantic</option>
            </select>
        </div>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Movies</th>
            <th>Genre</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => {
            if (genrefilter==movie.genre.toLocaleLowerCase() || genrefilter=="")
            return (<tr key={movie.movie_id}>
                <td>{movie.movie_name}</td>
                <td>{movie.genre}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletemovie(movie.movie_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>)
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default List;