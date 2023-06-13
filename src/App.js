import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0)
  const [changeMode, setChangeMode] = useState(false)

  const handleChangeMode = () => setChangeMode(!changeMode)

  useEffect(() => {
    if (changeMode) {
      const intervalId = setInterval(() => setCount((prevCount) => prevCount + 1), 1000)

      return () => clearInterval(intervalId)
    }
  }, [changeMode]);

  const handleReset = () => setCount(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleChangeMode}>{changeMode ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;