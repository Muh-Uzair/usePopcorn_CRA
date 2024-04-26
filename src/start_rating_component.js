import { useState } from "react"
import PropTypes from "prop-types"




const div_all_contain_styles = {
    display:"grid",
    gridTemplateColumns : "1fr 30px" ,
    columnGap: "10px" , 
    // alignItems:"center" , 
    // gap:"16px" ,
    marginLeft:"16px" ,

}


const div_stars_styles ={

    display:"flex" 
}




Start_rating_component.propTypes = {
    total_stars: PropTypes.number ,   
    color : PropTypes.string ,
    text_size : PropTypes.number ,
    font_family : PropTypes.string , 

}


export default function Start_rating_component({

total_stars=5 ,

color = "#fcc419" ,

text_size = 38 ,
font_family ="gilroy" ,

star_size=48 ,

messages_arr=[],

movie_rating_outside ,

set_movie_rating_outside ,

recieved_key ,


}) {

                        const number_of_stars_styles = {
                            margin:"0px" ,
                            lineHeight:"1" ,
                            color:color,
                            fontSize:`${text_size}px` , 
                            fontFamily : font_family ,     
                        }



                        const [rating , set_rating] = useState(0) ;
                    //_________________________________________________________________________________________    
                        function handle_stars_click_function(event_info_object, rating_value) {
                            set_rating(rating_value) ;
                            set_movie_rating_outside(rating_value)                        
                        }





                        const [hover_rating , set_hover_rating] = useState(0) ;
                    //_________________________________________________________________________________________
                        function on_mouse_enter_function(event_info_object , rating_value){                            
                            set_hover_rating(rating_value)
                            
                        }
                    //_________________________________________________________________________________________            
                        function on_mouse_out_function(event_info_object) {
                            set_hover_rating(0) ;
                        }



//------------------------------------------------------------------------------------------------------l
    return(

        <div className="div_all_contain" style={div_all_contain_styles}>

            <div className="div_stars" style={div_stars_styles}>
                {Array.from({length:total_stars} , (_,i) => (


                    <Stars key={i} 
                    handle_stars_click_function={handle_stars_click_function}
                    on_mouse_enter_function={on_mouse_enter_function}
                    on_mouse_out_function={on_mouse_out_function}
                    rating_value={i+1}
                    full={ i < hover_rating  ? true   :  i < rating ? true : false }
                    color={color}
                    star_size={star_size}
                    />


                ))}
            </div>

            <p className="number_of_stars" style={number_of_stars_styles}>{ messages_arr.length !== 0 && messages_arr.length === total_stars ? 
            hover_rating ? messages_arr[hover_rating-1] : 
            rating ? messages_arr[rating-1] : ""   

            : hover_rating || rating || ""}</p>           

        </div>
    )
//------------------------------------------------------------------------------------------------------l
    
}










function Stars({
handle_stars_click_function ,
on_mouse_enter_function ,
on_mouse_out_function ,
rating_value ,
full ,
color ,
star_size,
}) {


                        const star_styles = {

                            width:`${star_size}px`,
                            heiht:`${star_size}px`,
                            display:"block" ,
                            cursor:"Pointer" ,
                        }




    

    
//--------------------------------------------------------------------------------------------
    return(

        <span 
        role="button" 
        style={star_styles} 
        onClick={(e) => handle_stars_click_function(e , rating_value)}
        onMouseEnter={(e) => on_mouse_enter_function(e , rating_value)} 
        onMouseLeave={(e) => on_mouse_out_function(e)}
        >

                { full ? 
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill={color}
                stroke={color}
                >
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
                </svg> 
                
                : 

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke={color}
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
                </svg>
                }

        </span>

        
    )
//--------------------------------------------------------------------------------------------

}