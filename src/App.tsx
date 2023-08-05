import React from "react";
import useSyncToLocalStorage from "./hooks/useSyncToLocalStorage";

function App() {
  const [loan, setLoan] = useSyncToLocalStorage("loan", 100);

  return <input value={loan} onChange={(e) => setLoan(e.target.value)} />;
}

export default App;
