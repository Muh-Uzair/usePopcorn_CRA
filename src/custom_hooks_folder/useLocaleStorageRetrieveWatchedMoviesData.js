
import { useState , useEffect } from "react"


export function useLocaleStorageRetrieveWatchedMoviesData() {

    const [temp_watch_data , set_temp_watch_data] = useState(function() {
        let val_from_local_storage = JSON.parse(localStorage.getItem("all_watched_movies")) ;
        if(!val_from_local_storage) {
          val_from_local_storage=[] ;
        }

        return val_from_local_storage
      }) ;


      useEffect(function() {

        // console.log("pushed to local storage")
        localStorage.setItem("all_watched_movies" , JSON.stringify(temp_watch_data)) ;

      } , [temp_watch_data])
//________________________________________



    return [temp_watch_data , set_temp_watch_data] ;
}