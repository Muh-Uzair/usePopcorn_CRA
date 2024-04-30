import { useState, useRef , useEffect } from "react";




export function usseAddRemoveEventListener(
movie_clicked ,
set_movie_clicked ,
input_search_bar ,
) {
    
    useEffect(function() {

        function work_that_will_be_performed(event_info_object){

            if(event_info_object.key === "Escape" && movie_clicked === true ) {
                set_movie_clicked(false) ;
                return ;
            }

            if(event_info_object.key === "Enter") {
                input_search_bar.current.focus() ;
            }

              return 

        }

        document.addEventListener("keydown" , work_that_will_be_performed )


        // Cleanup function_________________________________________
        return function() {
            document.removeEventListener("keydown" , work_that_will_be_performed  ) ;
        }
    })

    return null ;
}