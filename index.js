const express=require("express");
const app=express();
const cors=require('cors');
const pool= require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Routes

// adding movie list
app.post("/movies",async(req,res)=>{
    try{
        console.log(req.body);
        const { movie_name }= req.body;
        const { genre }= req.body;
        const newmovie=await pool.query(
            "INSERT INTO movie (movie_name,genre) VALUES($1,$2) RETURNING*",
            [movie_name,genre]
        );
        
        res.json(newmovie.rows[0]);
        //res.json(newgenre);
    } catch(err){
        console.error(err.message);
    }
});

// get all movies
app.get("/movies",async(req,res)=>{
    try{
        const allmovies=await pool.query("SELECT * FROM movie");
        res.json(allmovies.rows);
    } catch(err){
        console.error(err.message);
    }
});

// filtering
app.get("/movies/:genre",async(req,res)=>{
    try{
        const {genre}=req.params;
        const movie=await pool.query("SELECT * FROM movie WHERE genre=$1",[genre]);
        res.json(movie.rows);
    } catch(err){
        console.error(err.message);
    }
});

// delete
app.delete("/movies/:movie_id",async(req,res)=>{
    try{
        const {movie_id}=req.params;
        const delmovie=await pool.query("DELETE FROM movie WHERE movie_id = $1",[movie_id]);
        res.json("Movie was Deleted");
    } catch(err){
        console.error(err.message);
    }
});


app.listen(5000,() => {
    console.log("Server at 5000");
});
