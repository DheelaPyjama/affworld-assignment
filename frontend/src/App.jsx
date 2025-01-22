import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Board from "./components/Board";
import BoardProvider from "./contexts/BoardContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      <Register />
      <BoardProvider>
        <Board />
      </BoardProvider>
    </>
  );
}

export default App;
