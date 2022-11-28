import React, { useState, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import Checkbox from "../../Atoms/Checkbox";
import Input from "../../Atoms/Input";
import EditButton from "../../Atoms/EditButton";

const Task = ({ onClick, taskName, onEditComplete }) => {
  const [OnEdit, setOnEdit] = useState(true);

  const stateEditButton = () => {
    setOnEdit(true);
  };
  return (
    <TaskWrapper>
      <Checkbox onClick={onClick} />
      <TaskContainer>
        {OnEdit ? (
          <Input
            defaultValue={taskName}
            onEditComplete={(taskName) => {
              onEditComplete(taskName);
              setOnEdit(false);
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
`;
const TextContainer = styled.div`
  display: flex;
  width: 216px;
  justify-content: space-between;
`;
const TaskContainer = styled.div`
  margin-left: 10px;
`;
const TaskText = styled.p`
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  margin: 0px;
`;
