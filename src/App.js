import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
    let CountPlus = () =>{
        const newCount = count+1 
        setCount(newCount)
    }
    
  return (
    <div>
      <h3 className='text-center fs-1 fw-bold text-info'>Hello React</h3>
      <Header name={count}></Header>
      <Main setCart={CountPlus} ></Main>

    </div>
  );
}

export default App;
