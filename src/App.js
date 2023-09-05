import "./App.css";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList") || [])
  );
  const [element, setElement] = useState({});
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        element={element}
        setElement={setElement}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        element={element}
        setElement={setElement}
      />
    </div>
  );
}

export default App;
