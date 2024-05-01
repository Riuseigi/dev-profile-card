function SkillLabel({name,emoji,color}){
    const labelStyle = {
        backgroundColor: color,
    };
    return(
        <div className="skillLabel" style={labelStyle}>
            <span>{name}</span>
            <span>{emoji}</span>
        </div>
    )
}
export default SkillLabel