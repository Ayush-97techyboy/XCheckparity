import { useState } from 'react'
import './App.css'

function App() {

  const [number, setNumber] = useState();
  const [parity, setParity] = useState('');

  const handleCheck = () => {
    const num = Number(number);
    if (isNaN(num) || String(number).trim() === '') {
      setParity('invalid');
    } else if (num % 2 === 0) {
      setParity('even');
    } else {
      setParity('odd');
    }
  };

  return (
    <>
      <div id='main'>
      <section id="center">
        <p>Even or Odd Checker</p>
        <input type="text" className='input' id='input' name="number" value={number} onChange={(e) => { setNumber(e.target.value); setParity(''); }} placeholder="Enter a number" />
        <button type="button" className='btn' id='btn' onClick={handleCheck}>Check</button>

        {parity === 'even' && <p className='result' id='result'>The number {number} is {parity}!</p>}
        {parity === 'odd' && <p className='result' id='result'>Oops, {number} is {parity}!</p>}
        {parity === 'invalid' && <p className='result' id='result'>Not a Valid number!</p>}
      </section>
      </div>
    </>
  )
}

export default App
