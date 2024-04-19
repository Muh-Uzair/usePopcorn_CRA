import { useState } from "react";
import { tempMovieData } from "../App";
import {Btn_plus_minus_comoonent} from "./generic_components"





export function Section_left_component({temp_movie_data , set_temp_movie_data}) {

  
  const [btn_plus_minus, set_btn_plus_minus] = useState(true);




  return (

    <section className="section_left">

      <Btn_plus_minus_comoonent 
      btn_plus_minus={btn_plus_minus} set_btn_plus_minus={set_btn_plus_minus}/>

      {btn_plus_minus && 
      <Movie_list_component 
      temp_movie_data={temp_movie_data} set_temp_movie_data={set_temp_movie_data}
      /> }
      

    </section>

  );
}


function Movie_list_component({
  
tempMovieData ,
temp_movie_data , set_temp_movie_data ,

}) {

  return(

    <ul className="ul_movies_list">
    {temp_movie_data.map((val) => (
      <li key={val.Title}>

        <div className="div_movie_poster">
          <img className="img_movie_poster" src={val.Poster}  />
        </div>


        <div className="div_movie_text">
          <p className="movie_name">{val.Title}</p>
          <p className="text_movie_release_year">🗓 {val.Year}</p>

        </div>

      </li>
    ))}
  </ul>

    
  )
}
