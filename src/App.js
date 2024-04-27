


// import { Section_left_component } from "./components_folder/Section_left_component";
import { useEffect, useState } from "react";
import { Nav_bar_component, Logo_plus_name_component, Input_movie_name_component, Founded_results_component } from "./components_folder/Nav_bar_component";
import { Btn_plus_minus_comoonent } from "./components_folder/generic_components";
import Start_rating_component from "./start_rating_component"


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
    runtime: "148 min",
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://static.posters.cz/image/750/posters/back-to-the-future-i2795.jpg",
    runtime: "116 min",
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
  const [movie_clicked , set_movie_clicked] = useState(false) ;
  const [movie_details_obj , set_movie_details_obj] = useState("") ; 
  const [big_movie_details_obj , set_big_movie_details_obj] = useState({}) ;
  const [is_loading_details , set_is_loading_details] = useState(false) ;
  



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
                movie_clicked={movie_clicked}  set_movie_clicked={set_movie_clicked}
                movie_details_obj={movie_details_obj} set_movie_details_obj={set_movie_details_obj}
                big_movie_details_obj={big_movie_details_obj} set_big_movie_details_obj={set_big_movie_details_obj}
                is_loading_details={is_loading_details} set_is_loading_details={set_is_loading_details}
                
                />  }


                
                     

              </Section_component>




              <Section_component            
              >
                {/* {!movie_clicked && 
                <>
                      <Div_section_right_summary_component temp_watch_data={temp_watch_data}/>
                      <Div_section_right_movies_list_component temp_watch_data={temp_watch_data}/>
                </>
                } */}

                {/* {movie_clicked && 
                <>
                      {is_loading_details ? <Loader_component msg={"LOADING..."}/> : 
                      <Movie_details_component 
                      movie_details_obj={movie_details_obj} set_movie_details_obj={set_movie_details_obj}
                      movie_clicked={movie_clicked} set_movie_clicked={set_movie_clicked}
                      big_movie_details_obj={big_movie_details_obj} set_big_movie_details_obj={set_big_movie_details_obj}
                      />
                    }
                </>} */}

                {movie_clicked ? is_loading_details ? <Loader_component msg={"LOADING..."}/> : 
                <Movie_details_component 
                      movie_details_obj={movie_details_obj} set_movie_details_obj={set_movie_details_obj}
                      movie_clicked={movie_clicked} set_movie_clicked={set_movie_clicked}
                      big_movie_details_obj={big_movie_details_obj} set_big_movie_details_obj={set_big_movie_details_obj}
                      temp_watch_data={temp_watch_data} set_temp_watch_data={set_temp_watch_data}
                      /> 
                      : 
                      <>
                      <Div_section_right_summary_component 
                      temp_watch_data={temp_watch_data} />
                      <Div_section_right_movies_list_component temp_watch_data={temp_watch_data}/>
                      </>

                }


                

              </Section_component>








        </Main_component>

    </div>
  )
}













//////////////////////////////////////////////////////////////
function Div_section_right_summary_component({
  temp_watch_data ,

}) {

  // console.log(temp_watch_data) ;

  const [average_user_rating , set_average_user_rating] = useState(0) ;
  let avg_usr_rat = 0 ;

  const [average_imdb_rating , set_average_imdb_rating] = useState(0) ;
  let avg_imdb_rat = 0 ;

  const [average_duration , set_average_duration] = useState(0) ;
  let avg_dur = 0 ;

  
  
  useEffect(function() {

    temp_watch_data.map( (val) => {

      avg_usr_rat = avg_usr_rat + val.userRating ;   
      avg_imdb_rat = avg_imdb_rat + parseFloat(val.imdbRating) ;

      let index_of_space = val.runtime.indexOf(" ") ;

      // console.log(val.runtime , index_of_space) ;
      // console.log(parseInt( val.runtime.slice(0 , index_of_space)))
      // console.log(" ")

      avg_dur = avg_dur + parseInt( val.runtime.slice(0 , index_of_space) )
  
    })

    set_average_user_rating( ((avg_usr_rat/temp_watch_data.length)).toFixed(1) ) ;
    set_average_imdb_rating( ((avg_imdb_rat/temp_watch_data.length)).toFixed(1) ) ;
    set_average_duration(  Math.trunc((avg_dur/temp_watch_data.length))  ) ;


    
  })
  



  return(

  <div className="div_setion_right_summary">

        <p className="text_movies_you_have_watched">MOVIES YOU HAVE WATCHED</p>


        <div className="div_summary_detials">

          <p className="text_total_movies_watched"><span className="icon_total_movies_watched">🎫</span>{temp_watch_data.length} movies</p>
          <p className="text_average_imdb_raating"><span className="icon_average_imdb_rating">⭐</span>{average_imdb_rating}</p>
          <p className="text_average_user_rating"><span className="icon_average_user_rating">🌟</span>{average_user_rating}</p>
          <p className="text_average_movie_duration"><span className="icon_average_movie_duration">⏳</span>{average_duration} min</p>


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
                  <p className="text_movie_duration"><span className="icon_moview_duration">⏳</span>{val.runtime}</p>
                  
                </div>
                

              </div>

            </li>
          ))}
        </ul>


    </div>
  )

}
function Movie_details_component({
movie_details_obj , set_movie_details_obj ,
movie_clicked , set_movie_clicked ,
big_movie_details_obj , set_big_movie_details_obj ,
temp_watch_data, set_temp_watch_data ,

}) {

  // console.log(movie_details_obj) ;

  const [movie_rating_by_user , set_movie_rating_by_user] = useState(0) ;


  function check_duplication_in_temp_movie_data_function(){

    let flag = true ;

    temp_watch_data.map( (val) => {

      if(val.imdbID === big_movie_details_obj.imdbID ) {
        flag = false ;
      }

    } )

    return flag ;

  }


  function handle_add_to_list_btn_click_function(event_info_object) {
    
    

    const movie_details_for_pushing = {

      imdbID: big_movie_details_obj.imdbID,
      Title: big_movie_details_obj.Title,
      Year: big_movie_details_obj.Year,
      Poster:big_movie_details_obj.Poster,
      runtime: big_movie_details_obj.Runtime,
      imdbRating: big_movie_details_obj.imdbRating,
      userRating: movie_rating_by_user ,
      
    }


    if(check_duplication_in_temp_movie_data_function()){

      set_temp_watch_data([...temp_watch_data , movie_details_for_pushing]) ;
      set_movie_clicked(false)
      
    }
    else if(!check_duplication_in_temp_movie_data_function()){
      set_movie_clicked(false)
      return
    }
    

    
  }

  

  



  return(
    <div className="div_movie_details">

      
      
      <div className="div_all_movie_details">

        <div className="div_img_movie_poster_big">
            <img className="img_movie_poster_big" src={big_movie_details_obj.Poster} />
        </div>

        

        <div className="div_all_movie_details_text">

          <p className="text_movie_title_big">{big_movie_details_obj.Title}</p>
          <p className="text_date_movie_time"> 
            <span className="text_realease_dat">{big_movie_details_obj.Released}</span>
            - 
            <span className="text_movie_duration_right">{big_movie_details_obj.Runtime}</span> </p>
          <p className="text_movie_type">{big_movie_details_obj.Genre}</p>
          <p className="text_imdb_rating_right">⭐ {big_movie_details_obj.imdbRating} IMDb rating</p>

        </div>

        
        
      </div>



      <div className="div_rating_stars">

        <div className={ movie_rating_by_user > 0 ? "div_inner_rating_stars_btn" : "div_inner_rating_stars"}>
          
          <div className={movie_rating_by_user > 0 ? "div_inner_inner_rating_stars_btn" : ""}>
              <Start_rating_component 
              total_stars={10} text_size={24} star_size={28}  
              key={big_movie_details_obj.imdbID}
              set_movie_rating_outside={set_movie_rating_by_user}
              />
          </div>

          {movie_rating_by_user > 0 && 
          <button className="btn_add_to_list" onClick={(e) => handle_add_to_list_btn_click_function(e)}>+ Add to list</button>
          }


          
        </div>
        
      </div>



      <div className="div_short_movie_info" style={movie_rating_by_user > 0 ? {marginTop:"60px"} : {marginTop:"0px"} }>


        <p><em>{big_movie_details_obj.Plot}</em></p>
        <p>Starring {big_movie_details_obj.Actors}</p>
        <p>Directed by {big_movie_details_obj.Director}</p>


        
      </div>


      <div className="div_btn_back_right">
          <button className="btn_back_right" onClick={(e) => set_movie_clicked(false)}>&larr;</button>
      </div>

    </div>
  )
}
//////////////////////////////////////////////////////////////












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
  movie_clicked, set_movie_clicked ,
  movie_details_obj , set_movie_details_obj ,
  big_movie_details_obj , set_big_movie_details_obj ,
  is_loading_details , set_is_loading_details ,


}) {


  



  
  function handle_movie_click(e , recieved_movie_details_obj) {

    
    if(movie_details_obj === recieved_movie_details_obj ) {
      set_movie_clicked(!movie_clicked) ;
      return ;
    }
    
    set_movie_clicked(true) ;
    set_movie_details_obj(recieved_movie_details_obj) ;  
    
  }




  
  
  

  


  useEffect(function() {

    async function get_movie_details(){

      try{

        
        set_is_loading_details(true)
        const res = await fetch(`http://www.omdbapi.com/?i=${movie_details_obj.imdbID}&apikey=${API_KEY}&=${movie_details_obj.imdbID}`) ;

        const data = await res.json() ;
        set_big_movie_details_obj( prev=>  data) ;
        

        

      }
      catch(err) {

      }
      finally{
        set_is_loading_details(false)        
      }


    }

    get_movie_details() ;

  }, [movie_details_obj.imdbID])


  




 if(temp_movie_data) {
  return (

    <ul className="ul_movies_list">
      {temp_movie_data.map((val) => (
        <li key={val.imdbID} onClick={(e) => handle_movie_click(e , val)}
        style={movie_details_obj.imdbID === val.imdbID ? {backgroundColor:"#393f46"} : {} }
        >

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













function Main_component({
children

}) {

  return( 
    
    <main className="main_lower_box">

      {children}


    </main>
  )
}


