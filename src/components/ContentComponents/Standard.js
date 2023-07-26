import React, { useState } from 'react'
import Form from '../Helpers/Form'
import Card from '../Helpers/Card'
import ResultCard from './ResultCard';


const Standard = () => {
  const [result, setResult] = useState("");
  
  const resetHandler = (value) => {
    setResult(value);
    
  };
  return (
    <Card>
      <Form name="standard"  onResult={resetHandler}/>
      <ResultCard result = {result} />
    </Card>
  )
}

export default Standard
