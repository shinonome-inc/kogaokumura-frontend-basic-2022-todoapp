import React, { useState } from "react";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const TodoCard = () => {
  const [task, setNewTask] = useState([]);
  const pushAddbutton = () => {
    setNewTask([...task, { name: "", state: "TODO" }]);
  };
  const editingTask = task.map(({ name, state }, index) => {
    if (state == "TODO") {
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
          stateEditButton={() => {
            let editedTask = [...task];
            editedTask[index].state = "DONE";
            setNewTask(editedTask);
          }}
          taskName={name}
          defoultIsEditing="true"
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
  padding: 22px 26px;
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
`;
const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 6px 20px;
  gap: 10px;
`;
