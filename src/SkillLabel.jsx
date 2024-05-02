function SkillLabel({name,emoji,color,level}){
    const labelStyle = {
        backgroundColor: color,
    };
    return(
        <div className="skillLabel" style={labelStyle}>
            <span>{name}</span>
            <span>{emoji}</span>
            <span>
            {level==='beginner' && '👶'}
            {level==='intermediate' && '👍'}
            {level==='expert' && '💪'}
            </span>
        </div>
    )
}
export default SkillLabel