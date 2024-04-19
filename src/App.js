

import { Section_right_component } from "./components_folder/Section_right_component";
import { Section_left_component } from "./components_folder/Section_left_component";
import { useState } from "react";
import { Nav_bar_component, Logo_plus_name_component, Input_movie_name_component, Founded_results_component } from "./components_folder/Nav_bar_component";


// This movies data will be shown when we first load the app
export const tempMovieDataDummy = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_SY879_.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://i.pinimg.com/originals/98/ff/c0/98ffc01fba89d5f8b073271a2e022aba.jpg",
  },
];

// This data will also be loaded initialyy
const tempWatchedDataDummy = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://static.posters.cz/image/750/posters/back-to-the-future-i2795.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];







export default function App() {

  const [temp_movie_data , set_temp_movie_data] = useState(tempMovieDataDummy) ;
  const [temp_watch_data , set_temp_watch_data] = useState(tempWatchedDataDummy)




  return (
    <div className="div_everything_containing">

      
      <Nav_bar_component>

        <Logo_plus_name_component />
        <Input_movie_name_component />
        <Founded_results_component temp_movie_data={temp_movie_data}/>

      </Nav_bar_component>



      <Main_component 
      temp_movie_data={temp_movie_data} set_temp_movie_data={set_temp_movie_data}
      temp_watch_data={temp_watch_data} set_temp_watch_data={set_temp_watch_data}      
      />

    </div>
  )
}





function Main_component({
temp_movie_data , set_temp_movie_data ,
temp_watch_data , set_temp_watch_data ,

}) {

  return( 
    
    <main className="main_lower_box">

        <Section_left_component 
        temp_movie_data={temp_movie_data} set_temp_movie_data={set_temp_movie_data}
        />

        <Section_right_component 
        temp_watch_data={temp_watch_data} set_temp_watch_data={set_temp_watch_data}
        
        />



    </main>
  )
}


