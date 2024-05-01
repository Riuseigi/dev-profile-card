import Avatar from "./Avatar"
import Intro from "./Intro"
import Skills from "./Skills"

function Card(props){
    return(
        <div className="card">
            <Avatar image={props.imageUrl}/>
            <Intro name={props.name} description={props.description}/>
            <Skills skill ={props.skills}/>
        </div>
    )
}

export default Card