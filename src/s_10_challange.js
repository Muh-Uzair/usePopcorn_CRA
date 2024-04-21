import { useState } from "react"


export default function App() {



    return(

        <div>

            <Text_expander_component 
            >
            Paragraph 1: Use elements when you want more explicit control over what you're passing to a 
            component. This allows you to pass specific components or elements as props, which 
            can be useful for customization or conditional rendering.This allows you to pass specific components or elements as props, which 
            can be useful for customization or conditional rendering.This allows you to pass specific components or elements as props, which 
            can be useful for customization or conditional rendering.
            </Text_expander_component>

            <Text_expander_component 
            >
            Paragraph 2: prop is, a special prop in React that allows you to pass children elements directly 
            inside a component's JSX. This is useful when you want to wrap other components or 
            content within a parent component.This allows you to pass specific components or elements as props, which 
            can be useful for customization or conditional rendering.This allows you to pass specific components or elements as props, which 
            can be useful for customization or conditional rendering.
            </Text_expander_component>

            <Text_expander_component
            >
            Paragraph 3: React typically refers to a React element, which is a lightweight representation of a
            DOM element or a component. You can pass elements as props to other components, 
            allowing more flexibility and customization.This allows you to pass specific components or elements as props, which 
            can be useful for customization or conditional rendering.This allows you to pass specific components or elements as props, which 
            can be useful for customization or conditional rendering.
            </Text_expander_component>



        </div>
    )
}


function Text_expander_component({
children ,
}) {

                        const show_text_btn_styles = {
                        border:"none" ,
                        backgroundColor : "white" ,
                        margin : "0px" ,
                        fontFamily : "Arial" ,
                        fontSize:"15px" ,
                        color : "blue" ,
                        cursor:"pointer" ,
                        }

                        // const paragraph = children ;

                        // const words = paragraph.match(/\b\w+\b/g);

                        // // Extracting the first 10 words
                        // const first10Words = words.slice(0, 10).join(" ");

                        
                       

                    //________________________________________________________________________
                            const [show_status , set_show_status] = useState(false) ;
                            function handle_status_change_function(event_info_object){
                                set_show_status(!show_status);
                            }





    return(
        <>
            <div>
                {show_status ? children : "..."}
                <span 
                style={show_text_btn_styles}
                onClick={()=> handle_status_change_function()}
                >Show Text</span>          
            </div>
            
        </>
    )
}