import React, { Fragment, useState } from "react";

const Input = () => {
  const [movie_name, setmovie_name] = useState("");
  const [genre, setgenre] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { movie_name,genre };
      const response = await fetch("http://localhost:5000/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  
    return (
    <Fragment>
      <h1 className="text-center mt-5">Movie DVD Rental</h1>
      <form className="text-center mt-5" onSubmit={onSubmitForm}>
        <label>
            <b>Movie</b>
            <input
            type="text"
            value={movie_name}
            onChange={e => setmovie_name(e.target.value)}
            />
        </label>
        
        <label>
            <b>Genre</b>
            <input
            type="text"
            value={genre}
            onChange={e => setgenre(e.target.value)}
            />
        </label>
        <button className="btn btn-primary">Add</button> 
      </form>
    </Fragment>
  );
};

export default Input;