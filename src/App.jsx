import Card from "./Card.jsx";
import './App.css';


function App() {
  
  const developers = [
    {
      name: 'John Doe',
      description: 'Full Stack Developer with a passion for creating web applications.',
      skills: [
        { name: 'JavaScript', emoji: '💻', color: '#f0db4f' },
        { name: 'React', emoji: '⚛️', color: '#61dafb' },
        { name: 'Node.js', emoji: '🚀', color: '#68a063' },
        { name: 'Express', emoji: '🛤️', color: '#000000' },
        { name: 'MongoDB', emoji: '🍃', color: '#4DB33D' },
        { name: 'HTML', emoji: '🌐', color: '#e34c26' },
        { name: 'CSS', emoji: '🎨', color: '#563d7c' }
      ],
      imageUrl: 'https://8szvtk.csb.app/jonas.jpeg'
    },
    {
      name: 'Jane Smith',
      description: 'Frontend Developer specializing in building responsive web interfaces.',
      skills: [
        { name: 'JavaScript', emoji: '💻', color: '#f0db4f' },
        { name: 'React', emoji: '⚛️', color: '#61dafb' },
        { name: 'Redux', emoji: '🔄', color: '#764abc' },
        { name: 'HTML', emoji: '🌐', color: '#e34c26' },
        { name: 'CSS', emoji: '🎨', color: '#563d7c' },
        { name: 'SASS', emoji: '🎨', color: '#c69' }
      ],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrX7WwAj8QqtYs2MCmdpadi03XV_cfxd3bDvzFOickg&s'
    }
  ];
  
  const cardRender = developers.map((dev,index)=>{
      return <Card key={index} imageUrl={dev.imageUrl} name={dev.name} description={dev.description}  skills={dev.skills}/>
    
  })
  return (
    <div className="main">
     {cardRender}

    </div>
  )
}

export default App
