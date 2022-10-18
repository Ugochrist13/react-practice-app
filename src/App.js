import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [color, setColor] = useState("red")
  const changeColor = () =>{
  const colors = ["blue", "green", "red"]
  // colors[0]? 
  console.log()
  // var e = colors[Math.floor(Math.random() * colors.length)]
  // setColor(e)
  }
  useEffect(() => {
    
    const data = JSON.stringify(color)
    localStorage.setItem('colors', data)
  }, [color])


  return (
    <div className='apps'>
    
      <div className="app" style ={{backgroundColor: color}}>
      </div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;
