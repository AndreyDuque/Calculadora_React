import './App.css';
import React, {useState} from 'react';

function App() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [currentOperartion, setcurrentOperartion] = useState("");
  const [result, setResult] = useState("");

  function clickNumber (val){
    if (currentOperartion === ""){
      setNumber1(number1 + val)
    }else{
      setNumber2(number2 + val);
    }
    
  }

  function clickOperation (val){
    setcurrentOperartion(val);
  }

  function getResult (){
    switch (currentOperartion){
      case "+":
        setResult(Number(number1) + Number(number2));
        break;
      case "-":
        setResult(Number(number1) - Number(number2));
        break;
      case "*":
        setResult(Number(number1) * Number(number2));
        break;
      case "/":
        setResult(Number(number1) / Number(number2));
        break;
    }
  }

  function deleteLast(){
    if (currentOperartion == "+" || currentOperartion == "-" || currentOperartion == "*" || currentOperartion == "/"){
      setNumber2(number2.slice(0, - 1));
    }else{
      setNumber1(number1.slice(0, - 1));
    }
  }

  function allClear(){
    setNumber1("");
    setNumber2("");
    setcurrentOperartion("");
    setResult("");
  }

  return (
    <div className="App">
      <div>
        <h1>Caluculadora React</h1>
      </div>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{currentOperartion ? number1 + currentOperartion + number2: ""}</div>
          <div className="current-operand">{result ? result : (!currentOperartion ? number1 : number2) }</div>
        </div>
        <button onClick={allClear} className="span-two">AC</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={() => {clickOperation("/")}}>/</button>
        <button onClick={() => {clickNumber(7)}}>7</button>
        <button onClick={() => {clickNumber(8)}}>8</button>
        <button onClick={() => {clickNumber(9)}}>9</button>
        <button onClick={() => {clickOperation("*")}}>*</button>
        <button onClick={() => {clickNumber(4)}}>4</button>
        <button onClick={() => {clickNumber(5)}}>5</button>
        <button onClick={() => {clickNumber(6)}}>6</button>
        <button onClick={() => {clickOperation("+")}}>+</button>
        <button onClick={() => {clickNumber(1)}}>1</button>
        <button onClick={() => {clickNumber(2)}}>2</button>
        <button onClick={() => {clickNumber(3)}}>3</button>
        <button onClick={() => {clickOperation("-")}}>-</button>
        <button onClick={() => {clickNumber(".")}}>.</button>
        <button onClick={() => {clickNumber(0)}}>0</button>
        <button onClick={getResult} className="span-two">=</button>

      </div>

    </div>
  );
}

export default App;
