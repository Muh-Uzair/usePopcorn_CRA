import { useState } from "react";
import {Btn_plus_minus_comoonent} from "./generic_components"


export function Section_right_component({

temp_watch_data, set_temp_watch_data

}) {

  const [btn_plus_minus, set_btn_plus_minus] = useState(true);

  return (

    <section className="section_right">

      <Btn_plus_minus_comoonent btn_plus_minus={btn_plus_minus} set_btn_plus_minus={set_btn_plus_minus}/>

      {btn_plus_minus && 
      <>

        <Div_section_right_summary_component temp_watch_data={temp_watch_data}/>
        <Div_section_right_movies_list_component temp_watch_data={temp_watch_data}/>
      
      </>
      }



    </section>

  );
}


function Div_section_right_summary_component({
  temp_watch_data ,
}) {

  return(

  <div className="div_setion_right_summary">

        <p className="text_movies_you_have_watched">MOVIES YOU HAVE WATCHED</p>


        <div className="div_summary_detials">

          <p className="text_total_movies_watched"><span className="icon_total_movies_watched">🎫</span>{temp_watch_data.length} movies</p>
          <p className="text_average_imdb_raating"><span className="icon_average_imdb_rating">⭐</span>8.65</p>
          <p className="text_average_user_rating"><span className="icon_average_user_rating">🌟</span>9.5</p>
          <p className="text_average_movie_duration"><span className="icon_average_movie_duration">⏳</span>136 min</p>


        </div>


  </div>

  )
}


function Div_section_right_movies_list_component({temp_watch_data}) {

  return (

    <div className="div_section_right_movies_list">

        <ul className="ul_movies_list">
          {temp_watch_data.map((val) => (
            <li key={val.Title}>

              <div className="div_movie_poster">
                <img className="img_movie_poster" src={val.Poster} />
              </div>


              <div className="div_movie_text">
                <p className="movie_name">{val.Title}</p>

                <div className="div_ratings_plus_details">

                  <p className="text_imdb_rating"><span className="start_imdb_rating">⭐</span>{val.imdbRating}</p>
                  <p className="text_user_rating"><span className="star_user_rating">🌟</span>{val.userRating}</p>
                  <p className="text_movie_duration"><span className="icon_moview_duration">⏳</span>{val.runtime} min</p>
                  
                </div>
                

              </div>

            </li>
          ))}
        </ul>


    </div>
  )

}