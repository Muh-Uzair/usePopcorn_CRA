import { useEffect, useRef, useState } from "react";


////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
export function Form_plus_input_component({
form_class_name , input_class_name , input_place_holder ,
movie_name_dummy , set_inputed_movie_name ,
handle_input_change ,
handle_form_submit ,
input_search_bar ,

            

}) {




    return(
    <form className={form_class_name} onSubmit={(e) => handle_form_submit(e)}>
        <input 
        type="text" className={input_class_name} placeholder={input_place_holder} 
        value={movie_name_dummy} 
        onChange={(e) => handle_input_change(e)}

        ref={input_search_bar}
        
        />
     </form>
    )
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
export function Btn_plus_minus_comoonent({
btn_plus_minus , set_btn_plus_minus ,
handle_movie_click_turn_off
}) {

    
    function handle_btn_plus_minus_click(event_info_object) {
      set_btn_plus_minus((btn_plus_minus) => !btn_plus_minus);
      handle_movie_click_turn_off()
    }

    return(
        <button className="btn_plus_minus" onClick={(e) => handle_btn_plus_minus_click(e)}>{btn_plus_minus === true ? "-" : "+"}</button>
    )
}