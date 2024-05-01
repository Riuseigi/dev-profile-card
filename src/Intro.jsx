export default function Intro({name,description}){
    return(
        <div className="intro">
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}