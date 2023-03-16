import { useState } from "react";
import "./App.css";

function App() {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const opers = ["*", "/", "+", "-"];

  const [number, setNumber] = useState("");
  const [oper, setOper] = useState("");
  const [number2, setNumber2] = useState("");

  const format = (number) => {
    return new Intl.NumberFormat('ru-RU').format(number);
  };

  const handleNumberClick = (number) => {
    if (oper === "") {
      setNumber((prev) => (prev === "" ? (prev = number) : "" + prev + number));
    } else {
      setNumber2((prev) => (prev === "" ? (prev = number) : "" + prev + number));
    }
  };

  const handleClickDot = () => {
    if (oper === "") {
      setNumber((prev) => ( prev === "" ? prev = "0." : "" + prev + "."));
    } else {
      setNumber2((prev) => ( prev === "" ? prev = "0." : "" + prev + "."));
    }
  }

  const handleDelete = () => {
    setNumber("");
    setNumber2("");
    setOper("");
  };

  const handleOper = (oper) => {
    setOper(oper);
  };
  const handlerResult = () => {
    switch (oper) {
      case "*":
        setNumber(number * number2);
        setNumber2("");
        setOper("");
        break;
      case "/":
        setNumber(number / number2);
        setNumber2("");
        setOper("");
        break;
      case "+":
        setNumber(Number(number) + Number(number2));
        setNumber2("");
        setOper("");
        break;
      case "-":
        setNumber(number - number2);
        setNumber2("");
        setOper("");
        break;
    }
  };

  const handleDeleteChar = () => {
    if(number2){
      setNumber2(prev => prev.slice(0, prev.length - 1))
      
    }

    if(!number2){
      if(oper){
        setOper("")
      }else{
        setNumber(prev => prev.slice(0, prev.length - 1))
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>калькулятор</h1>
      </header>
      <div className="calculator">
        <div className="head_cal">
          {format(number)} {oper} {oper !== "" ? format(number2) : null}
        </div>
        <div className="operations">
          {numbers.map((number) => {
            return (
              <div
                className="operation"
                onClick={() => handleNumberClick(number)}
              >
                {number}
              </div>
            );
          })}
          <div className="operation" onClick={() => handleClickDot()}>
            .
          </div>
          {opers.map((item) => {
            return (
              <div className="operation" onClick={() => handleOper(item)}>
                {item}
              </div>
            );
          })}
          <div className="operation" onClick={() => handlerResult()}>
            =
          </div>
          <div
            className="operation"
            style={{ color: "red" }}
            onClick={() => handleDelete()}
          >
            X
          </div>
          <div
            className="operation"
            style={{ color: "yellow", background: 'black' }}
            onClick={() => handleDeleteChar()}
          >
            C
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
