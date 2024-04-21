import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


// import './css_folder/index.css';
// import './css_folder/nav_bar_styles.css';
// import './css_folder/section_left_styles.css';
// import './css_folder/section_right_styles.css';





// import App from './App';
// import Start_rating_component from './start_rating_component';
import App from "./s_10_challange"


// function Test(){

//   const [movie_rating_outside , set_movie_rating_outside] = useState(0) ;

//   return(
//     <div>
//       <Start_rating_component 
//       total_stars={10} color={"purple"} 
//       movie_rating_outside={movie_rating_outside}
//       set_movie_rating_outside={set_movie_rating_outside}
//       />
//       <h3>This movie was rate {movie_rating_outside} stars </h3>
//     </div>
//   )
// }






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}


    {/* <Start_rating_component total_stars={5}/>

    <Start_rating_component 
    total_stars={5} 
    color={"red"}
    text_size={38}

    star_size={48}

    messages_arr={["Terrible" , "Bad" , "Ok" , "Good" , "Amaizing"]}
    />
    
    <Test /> */}

    <App />



  </React.StrictMode>
);


