import { useState } from 'react'
import InputPage from './pages/Inputpage';
import ResultPage from './pages/Resultpage';
import './App.css'

function App() {
  const [result, setResult] = useState("");


 const analyzeCV = async (cvText) => {
    const res = await fetch("http://localhost:5000/api/ai/analyze",{
      method:"POST",
      headers:{
          "Content-Type": "application/json"
      },
      body: JSON.stringify({cvText})
    });

    const data = await res.json();
    setResult(data);
  };


  return (
  <>
      {!result ? (
        <InputPage setResult={setResult} />
      ) : (
        <ResultPage result={result} />
      )}
    </>
    
  )
}

export default App
