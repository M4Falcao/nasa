import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import { Banner } from './components/banner/banner';
import { Question } from './components/question/question';
import logo2 from './logo2.png'


function App() {

  const [isStart, setStart] = useState(false)
  // setStart(true)
  // useEffect(() => {
  //   return ()=> {
  //     setTimeout(()=>{
  //       setStart(false)
  //     }, 5000)
  //   }
  // }, [isStart])

  return (
    <div className="App">
      <header className="App-header">
        <p>NASA</p>
      </header>
      <Banner
        setStart={setStart}
        isStart={isStart}
      />
      <Question
        setStart={setStart}
        isStart={isStart}
      />

      
    </div>
  );
}

export default App;
