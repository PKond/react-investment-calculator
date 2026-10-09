import Header from "./components/Header";
import Input from "./components/Input";
import TableResults from "./components/TableResults";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 10,
  });

  const inputisValid = userInput.duration >= 1;

  function handleInputChange(event) {
    setUserInput((prevInput) => ({
      ...prevInput,
      [event.target.name]: +event.target.value,
    }));
  }
  const results = calculateInvestmentResults(userInput);

  return (
    <>
      <Header />
      <Input userInput={userInput} onChangeInput={handleInputChange} />
      {!inputisValid && <p className="center">Please enter a duration of at least 1 year.</p>}
      {inputisValid && <TableResults userInput={userInput} />}
    </>
  );
}

export default App;
