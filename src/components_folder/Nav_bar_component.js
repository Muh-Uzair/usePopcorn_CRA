import { useState } from "react";
import { Form_plus_input_component } from "./generic_components";

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
export function Nav_bar_component({

  children,

}) {

  return (

    <nav className="nav_bar_top">

      {children}

    </nav>
  );


}
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
export function Logo_plus_name_component() {
  return (


    <div className="div_logo_plus_name">
      <span className="logo_popcorn">🍿</span>
      <p className="text_use_pop_corn"> usePopcorn</p>
    </div>

  );
}
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
export function Input_movie_name_component({
inputed_movie_name , set_inputed_movie_name ,
set_error_msg,
set_temp_movie_data ,
input_search_bar ,
}) {

  const [movie_name_dummy , set_movie_name_dummy] = useState("") ;
  
  function handle_input_change(event_info_object) {
    set_movie_name_dummy(event_info_object.target.value) ;    
  }

  function handle_form_submit(event_info_object) {
    event_info_object.preventDefault() ;

    // console.log(movie_name_dummy.trim().length ) ;

    if(movie_name_dummy.trim().length === 0 ) {
      set_error_msg("❌ Input field empty!") ;
      set_temp_movie_data([]) ;
      set_inputed_movie_name("") ;
    }
    else if(movie_name_dummy.trim().length !== 0) {
      set_inputed_movie_name(inputed_movie_name => movie_name_dummy) 
    }


    ;
    // console.log(movie_name_dummy.length) ;

    set_movie_name_dummy("") ;
  }



  return (

    <div className="div_input">
      <Form_plus_input_component
        form_class_name={"form_input_movie_name"}
        input_class_name={"input_movie_name"} input_place_holder={"Search movies..."} 
        movie_name_dummy={movie_name_dummy} set_inputed_movie_name={set_inputed_movie_name}
        handle_input_change={handle_input_change}
        handle_form_submit={handle_form_submit}
        input_search_bar={input_search_bar}
        

        />
    </div>

  );
}
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
export function Founded_results_component({ temp_movie_data }) {

  

  if(!temp_movie_data){
    
    return (
        <div className="div_results_found">
           <p className="text_results_fouond">Found 0 results</p>
        </div>
    )

  }
  
  if( temp_movie_data.length === 0 ) {

    return (
      <div className="div_results_found">
          <p className="text_results_fouond">Found 0 results</p>
      </div>
    )

  }
  else if(temp_movie_data.length > 0 ) {

      return (
        <div className="div_results_found">
        <p className="text_results_fouond">Found {!temp_movie_data.length ? 0 : temp_movie_data.length } results</p>
      </div>
     );
  }


}
