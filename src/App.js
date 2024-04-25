


// import { Section_left_component } from "./components_folder/Section_left_component";
import { useEffect, useState } from "react";
import { Nav_bar_component, Logo_plus_name_component, Input_movie_name_component, Founded_results_component } from "./components_folder/Nav_bar_component";
import { Btn_plus_minus_comoonent } from "./components_folder/generic_components";



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




const API_KEY = "d8e2a0b7" ;
const movie_name = 'Matrix' ;





export default function App() {

  const [temp_movie_data , set_temp_movie_data] = useState(tempMovieDataDummy) ;
  const [temp_watch_data , set_temp_watch_data] = useState(tempWatchedDataDummy) ;
  const [is_loading , set_is_loading] = useState(false) ;
  const [error_msg , set_error_msg] = useState("") ;
  const [inputed_movie_name , set_inputed_movie_name] = useState("") ;



  useEffect( function() {


    //----------
    async function fetch_movies_data() {

      try{
        
        set_is_loading(true) ;
        set_error_msg("") ; 
        const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${inputed_movie_name}`) ;
        if(res.ok === false) {
          throw new Error("Error_occured") ; 
        }

        const data = await res.json() ;
        if(data.Response === "False"){
          set_temp_movie_data([])
          throw new Error("❌ Movie not found") ;
          
        }


        // console.log(data.Search) ;

        set_temp_movie_data(data.Search)
        


      }
      catch(err_obj){
   
        set_error_msg(err_obj.message)      
        
      }
      finally{
        set_is_loading(false)
      }


    }
    //------------

    if(inputed_movie_name.length === 0)  return ;
    fetch_movies_data() ;

  } , [inputed_movie_name] )

  
  




  return (
    <div className="div_everything_containing">

      
      <Nav_bar_component>

        <Logo_plus_name_component />
        <Input_movie_name_component 
        inputed_movie_name={inputed_movie_name} set_inputed_movie_name={set_inputed_movie_name} 
        set_error_msg={set_error_msg}
        set_temp_movie_data={set_temp_movie_data}

        />
        <Founded_results_component temp_movie_data={temp_movie_data} />

      </Nav_bar_component>



      <Main_component 
      temp_movie_data={temp_movie_data} set_temp_movie_data={set_temp_movie_data}
      temp_watch_data={temp_watch_data} set_temp_watch_data={set_temp_watch_data}   
      
      
      >


              <Section_component >


                {is_loading ?<Loader_component msg={"LOADING..."} set_error_msg={set_error_msg} 
                inputed_movie_name={inputed_movie_name} set_inputed_movie_name={set_inputed_movie_name} 
                /> 
                 : 
                error_msg ? <Loader_component msg={error_msg} set_error_msg={set_error_msg} 
                inputed_movie_name={inputed_movie_name} set_inputed_movie_name={set_inputed_movie_name} 
                /> 
                :
                <Movie_list_component 
                temp_movie_data={temp_movie_data} set_temp_movie_data={set_temp_movie_data} 
                
                />  }


                
                     

              </Section_component>






              <Section_component            
              >

                <Div_section_right_summary_component temp_watch_data={temp_watch_data}/>
                <Div_section_right_movies_list_component temp_watch_data={temp_watch_data}/>

              </Section_component>








        </Main_component>

    </div>
  )
}



//////////////////////////////////////////////////////////////
function Section_component({

  children, 
  

}) {

  const [btn_plus_minus, set_btn_plus_minus] = useState(true);


  return (

    <section className="section_left">

      <Btn_plus_minus_comoonent
        btn_plus_minus={btn_plus_minus} set_btn_plus_minus={set_btn_plus_minus} />

      {btn_plus_minus && 
      children
      }


    </section>

  );
}
function Movie_list_component({

  temp_movie_data, set_temp_movie_data,


}) {



 if(temp_movie_data) {
  return (

    <ul className="ul_movies_list">
      {temp_movie_data.map((val) => (
        <li key={val.imdbID}>

          <div className="div_movie_poster">
            <img className="img_movie_poster" src={val.Poster} />
          </div>


          <div className="div_movie_text">
            <p className="movie_name">{val.Title}</p>
            <p className="text_movie_release_year">🗓 {val.Year}</p>
          </div>

        </li>
      ))}
    </ul>


  );
 }


}
function Loader_component({
msg , set_error_msg , 
inputed_movie_name, set_inputed_movie_name ,
}) {






  return(
    <div className="div_loader_component">
      {msg}
    </div>
  )
}
function Error_component({error_msg}) {

  console.log(error_msg)
  
  return(
    <div className="div_loader_component">
      {error_msg}
    </div>
  )

}



//////////////////////////////////////////////////////////////











//////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////
















function Main_component({
children

}) {

  return( 
    
    <main className="main_lower_box">

      {children}


    </main>
  )
}


