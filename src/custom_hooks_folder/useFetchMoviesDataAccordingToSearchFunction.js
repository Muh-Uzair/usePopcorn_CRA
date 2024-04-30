import { useEffect, useState } from "react";


const API_KEY = "d8e2a0b7" ;




export function useFetchMoviesDataAccordingToSearchFunction( 
temp_movie_data , set_temp_movie_data , 
inputed_movie_name ,
movie_clicked , set_movie_clicked
)

{





    const [is_loading , set_is_loading] = useState(false) ;
    const [error_msg , set_error_msg] = useState("") ;

    //_______________________________________________________________________________
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
                set_is_loading(false) ;
              }


            }
            //------------

            if(inputed_movie_name.length === 0)  return ;
            if(movie_clicked === true ) {set_movie_clicked(false)}
            fetch_movies_data() ;

          } , [inputed_movie_name] )






    return {is_loading , set_is_loading ,error_msg , set_error_msg } ;

}