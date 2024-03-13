import React, { useState } from 'react';
import "./Calculator.css"
import 'bootstrap-icons/font/bootstrap-icons.css'

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (e) => {
    setInput(input + e.target.textContent);
  };

  const calculateResult = () => {
    let result;
    try {
      const operands = input.match(/[+\-*/]|\d+(\.\d+)?/g);

      result = parseFloat(operands[0]);

      for (let i = 1; i < operands.length; i ++) {
        const operator = operands[i];
        const operand = parseFloat(operands[i + 1]);
  
        switch (operator) {
          case '+':
            result += operand;
            break;
          case '-':
            result -= operand;
            break;
          case '*':
            result *= operand;
            break;
          case '/':
            result /= operand;
            break;
          default:
            break;
        }
      }
  
      setResult(result.toString());
    } catch (error) {
      setResult('Error');
    }
  };
  

  
  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const handleBack = () => {
    setInput(input.slice(0,-1));
    
  };
  

  return (
    <div className='white'>
      <h1 className='h1'>CALCULATOR</h1>
      <div className='toggleBtn'></div>
      <div className='calculator' >
        <div className='buttons'>
        <input id="value" type="text" value={result || input} readOnly />
          <span onClick={clearInput} id='clear'>Clear</span>
          <span onClick={handleInput}>/</span>
          <span onClick={handleInput}>*</span>
          <span onClick={handleInput}>7</span>
          <span onClick={handleInput}>8</span>
          <span onClick={handleInput}>9</span>
          <span onClick={handleInput}>-</span>
          <span onClick={handleInput}>4</span>
          <span onClick={handleInput}>5</span>
          <span onClick={handleInput}>6</span>
          <span onClick={handleInput} id='plus'>+</span>
          <span onClick={handleInput}>1</span>
          <span onClick={handleInput}>2</span>
          <span onClick={handleInput}>3</span>
          <span onClick={handleBack}><i class="bi bi-backspace"></i></span>
          <span onClick={handleInput}>0</span>
          <span onClick={handleInput}>.</span>
          <span onClick={calculateResult} id='equal'>=</span>
        </div>
       
      </div>
      <div
        className="toggleBtn"
        onClick={() => {
          document.body.classList.toggle('dark');
        }}
      ></div>
    </div>
  )
}

export default Calculator;
