import React, { useState } from "react";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";
import styled from "styled-components";
const TodoCard = () => {
  const [task, setNewTask] = useState([]);
  const pushAddbutton = () => {
    setNewTask([...task, { name: "", state: "TODO" }]);
  };
  const editingTask = task.map(({ name, state }, index) => {
    if (state == "TODO") {
      return (
        <Task
          onEditcomplate={(taskName) => {
            let editedTask = [...task];
            if (taskName != "") {
              editedTask[index].name = taskName;
            } else {
              editedTask[index].state = "DONE";
            }
            setNewTask(editedTask);
          }}
          onClick={() => {
            let editedTask = [...task];
            editedTask[index].state = "DONE";
            setNewTask(editedTask);
          }}
          defaultTaskValue={name}
          isDefaultEditing="true"
        />
      );
    } else {
      return null;
    }
  });
  return (
    <StyledTodoCard>
      <AddTaskButton onClick={pushAddbutton} />
      <StyledTaskList>{editingTask}</StyledTaskList>
    </StyledTodoCard>
  );
};
export default TodoCard;
const StyledTodoCard = styled.div`
  width: 500px;
  padding: 20px 20px 6px;
  background-color: ${COLOR.LIGHT_BLACK};
`;
const StyledTaskList = styled.div`
  position: relative;
  left: 2px;
`;
