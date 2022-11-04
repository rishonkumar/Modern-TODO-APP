import { useState } from "react";
import CustomForm from "./components/CustomForm";

function App() {
  const [count, setcount] = useState(0);

  const addTask = (task) => {
    console.log(task);
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List </h1>
      </header>
      <CustomForm addTask={addTask} />
    </div>
  );
}

export default App;
