import React, { useState } from "react";
import styled from "styled-components";
import Addtaskbutton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";
import COLOR from "../../../variables/color";
const TodoCard = () => {
  const [task, setNewTask] = useState([]);
  const pushAddtaskbutton = () => {
    setNewTask([...task, { name: "", state: "TODO" }]);
  };
  const editingTask = task.map(({ name, state }, index) => {
    if (state === "TODO") {
      return (
        <Task
          onEditComplete={(taskName) => {
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
          taskName={name}
          defaultIsEditing="true"
        />
      );
    } else {
      return null;
    }
  });
  return (
    <StyledTodoCard>
      <Addtaskbutton onClick={pushAddtaskbutton} />
      <StyledTaskList>{editingTask}</StyledTaskList>
    </StyledTodoCard>
  );
};
export default TodoCard;
const StyledTodoCard = styled.div`
  width: 500px;
  padding: 20px 26px;
  margin: 0px auto;
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
`;
const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
`;
