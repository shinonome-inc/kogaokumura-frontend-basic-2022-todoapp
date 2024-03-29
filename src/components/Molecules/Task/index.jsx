import React, { useState, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import Checkbox from "../../Atoms/Checkbox";
import Input from "../../Atoms/Input";
import EditButton from "../../Atoms/EditButton";

const Task = ({ onClick, taskName, onEditComplete, defaultIsEditing }) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  useEffect(() => {
    if (taskName != "") {
      setIsEditing(false);
    }
  }, []);
  const stateEditButton = () => {
    setIsEditing(true);
  };
  return (
    <TaskWrapper>
      <Checkbox onClick={onClick} />
      <TaskContainer>
        {isEditing ? (
          <Input
            defaultValue={taskName}
            onEditComplete={(taskName) => {
              onEditComplete(taskName);
              setIsEditing(false);
            }}
          />
        ) : (
          <TextContainer>
            <TaskText>{taskName}</TaskText>
            <EditButton onClick={stateEditButton} />
          </TextContainer>
        )}
      </TaskContainer>
    </TaskWrapper>
  );
};
export default Task;

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 14px 6px 0px;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TaskContainer = styled.div`
  margin-left: 10px;
  flex: 1;
`;
const TaskText = styled.p`
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  margin: 0px;
`;
