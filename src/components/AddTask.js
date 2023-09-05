import React from "react";

const AddTask = ({ taskList, setTaskList, element, setElement }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (element.id) {
      const date = new Date();
      const updatedTask = taskList.map((task) =>
        task.id === element.id
          ? {
              id: element.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : task
      );
      setTaskList(updatedTask);
      setElement({});
    } else {
      const date = new Date();

      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      setElement({});
    }
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          autoComplete="off"
          name="task"
          value={element.name || ""}
          onChange={(e) => setElement({ ...element, name: e.target.value })}
        />
        <button type="submit">{element.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

export default AddTask;
