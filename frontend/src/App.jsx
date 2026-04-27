import { useState } from 'react'
import CVForm from "./components/CVForm";
import Result from "./components/Result";
import './App.css'

function App() {
  const [result, setRezult] = useState("");


 const analyzeCV = async (cvText) => {
    const res = await fetch("http://localhost:5000/api/analyze",{
      method:"POST",
      headers:{
          "Content-Type": "application/json"
      },
      body: JSON.Stringify({cvText})
    });

    const data = await res.json();
    setRezult(data);
  };


  return (
    
     <div>
      <CVForm onAnalyze={analyzeCV} />
      {result && <Result result={result} />}
    </div>
    
  )
}

export default App
