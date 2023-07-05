import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [counterValue, setCounterValue] = useState(0);
  const [storedValues, setStoredValues] = useState<number[]>([]);

  const handleAddOneToCounter = () => {
    setCounterValue(previousCount => previousCount + 1);
  };

  const handleSubtractOneFromCounter = () => {
    setCounterValue(previousCount => previousCount - 1);
  };

  const handleStoreCurrentCount = () => {
    setStoredValues(prevValues => [...prevValues, counterValue
    ]);
  };

  return (
    <>
      <h1>Number picker</h1>
      <p>Your stored numbers:</p>
      <ul>
        {storedValues.slice(-5)
          .map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <p>Counter: {counterValue}</p>
      <button onClick={handleSubtractOneFromCounter}>-1</button>
      <button onClick={handleAddOneToCounter}>+1</button>
      <hr />
      <button onClick={handleStoreCurrentCount}>Store current count</button>
    </>
  );
}
