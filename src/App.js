import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState, useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0)
    let CountPlus = () =>{
        const newCount = count+1 
        setCount(newCount)
    }

    useEffect(() => {
      AOS.init();
    }, []);
    
  return (
    <div>
      <h3 className='text-center fs-1 fw-bold text-info'>Hello Food Lover</h3>
      <Header name={count}></Header>
      <Main setCart={CountPlus} ></Main>
    </div>
  );
}

export default App;
