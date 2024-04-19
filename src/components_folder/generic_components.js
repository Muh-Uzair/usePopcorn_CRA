import { useState } from "react";

export function Form_plus_input_component({form_class_name , input_class_name , input_place_holder}) {

    return(
    <form className={form_class_name} >
        <input type="text" className={input_class_name} placeholder={input_place_holder} />
     </form>
    )
}


export function Btn_plus_minus_comoonent({btn_plus_minus , set_btn_plus_minus}) {

    
    function handle_btn_plus_minus_click(event_info_object) {
      set_btn_plus_minus((btn_plus_minus) => !btn_plus_minus);
    }

    return(
        <button className="btn_plus_minus" onClick={(e) => handle_btn_plus_minus_click(e)}>{btn_plus_minus === true ? "-" : "+"}</button>
    )
}