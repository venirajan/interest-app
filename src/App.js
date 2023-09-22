import TextField from '@mui/material/TextField';
import './App.css';
import { Stack,Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPriciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [isPricipleValid,setisPrincipleValid] = useState(true)
  const [isRatevalid,setIsRateValid] = useState(true)
  const [isYearValid,setIsYearValid] = useState(true)

  const validateInput = (e)=>{
    // {key} = object
    const {name,value} = e.target
    // logic to check validation - regular expression : /^[0-9]+$/
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name==="principle"){
    setPriciple(value)
    setisPrincipleValid(true)
      }else if(name==="rate"){
        setRate(value)
        setIsRateValid(true)
      }else{
        setYear(value)
        setIsYearValid(true)

      }
    }else {
      if(name==="principle"){
        setPriciple(value)
        setisPrincipleValid(false)
      }else if(name==="rate"){
        setRate(value)
        setIsRateValid(false)
      }else{
        setYear(value)
        setIsYearValid(false)

      }
    }
  }
  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("please fil the form completely!!!")
    }else{
      setInterest(principle*rate*year/100)
    }
  }
  const handleReset = ()=>{
    setInterest(0)
    setPriciple(0)
    setRate(0)
    setYear(0)
    setisPrincipleValid(true)
    setIsRateValid(true)
    setIsYearValid(true)

  }
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
   <div style={{width:'400px'}} className='bg-light p-5 rounded ' >
     <h3>simple interest app</h3>
     <p>Calculate your simple interest easily</p>
    <div style={{height:'150px'}} className="interest-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center flex-column text-light rounded shadow  ">
      <h1> ₹ {' '} {interest}</h1>
      <p className='fw-bolder'>Total Simple interest</p>
    </div>
    <form className='mt-2' onSubmit={handleCalculate} >
      <div className='mb-3'>
      <TextField className='w-100' id="outlined-basic-1" label="principle amount" variant="outlined" value={principle || ""} name='principle' onChange={(e)=>validateInput(e)} />
      </div>
      {
        !isPricipleValid &&
        <div className="mb-3 text-danger fw-bolder">
          *invalid user input
        </div>
      }
      <div className='mb-3'>
      <TextField className='w-100' id="outlined-basic-2" label="rate of interest (p.a)%"  variant="outlined" value={rate || ""} name='rate' onChange={(e)=>validateInput(e)}/>
      </div>
      {
        !isRatevalid &&
        <div className="mb-3 text-danger fw-bolder">
        *invalid user input
      </div>
      }
      <div className="mb-3">
      <TextField className='w-100' id="outlined-basic-3" label="Time period ( yr )" variant="outlined" value={year || ""} name='year' onChange={(e)=>validateInput(e)} />
      </div>
      {
       !isYearValid &&
      <div className="mb-3 text-danger fw-bolder">
        *invalid user input
      </div>
      }
      <Stack className='mt-2' direction="row" spacing={2}>
      <Button type='submit' style={{height:'70px',width:'50%'}} variant="contained" disabled = {isPricipleValid && isRatevalid && isYearValid?false:true} >Calculate</Button>
<Button  onClick={handleReset} style={{height:'70px',width:'50%'}} variant="outlined">Reset</Button>
      </Stack>
    </form>
     </div>

    </div>
  );
}

export default App;
