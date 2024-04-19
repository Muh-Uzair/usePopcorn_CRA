import {Form_plus_input_component} from "./generic_components"




export function Nav_bar_component({
  
  temp_movie_data,

}) {

  return (

    <nav className="nav_bar_top">

      <Logo_plus_name_component />
      <Input_movie_name_component />
      <Founded_results_component temp_movie_data={temp_movie_data}/>


      



    </nav>
  );


}


function Logo_plus_name_component() {
  return(

          
    <div className="div_logo_plus_name">
    <span className="logo_popcorn">🍿</span>
    <p className="text_use_pop_corn"> usePopcorn</p>
  </div>

  )
}

function Input_movie_name_component() {

  return(

    <div className="div_input">
    <Form_plus_input_component 
    form_class_name={"form_input_movie_name"} 
    input_class_name={"input_movie_name"} input_place_holder={"Search movies..."} />
</div>

  )
}
function Founded_results_component({temp_movie_data}) {

  return(
    <div className="div_results_found">
    <p className="text_results_fouond">Found {temp_movie_data.length} results</p>
  </div>
  )
}