import SkillLabel from "./SkillLabel"

function Skills({skill}){
       
        const skillRender = skill.map((element,index)=>{
            return <SkillLabel key={index} name={element.name} emoji={element.emoji} color={element.color} level={element.level}/>
        })
      
    return(
       
        <div className="skill-container">
            {skillRender}
        </div>
    )
}
export default Skills