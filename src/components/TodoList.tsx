import React, { useState } from "react";
import { useTodoStore } from "../store/todoStore";
import { TodoItem } from "./TodoItem";
import styled from "@emotion/styled";

const Wrapper = styled.div({
  width: "100vw",
  height: "100vh",
  display: "grid",
  placeItems: "center",
  backgroundColor: "#f0f0f0",
  padding: 20,
  boxSizing: "border-box",
});

const Card = styled.div({
  width: "50%",
  maxHeight: "90vh", // Muhim!
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: 24,
  borderRadius: 12,
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  overflow: "hidden", // Muqaddamki `flex: 1` ni olib tashladik
  boxSizing: "border-box",
});

const InputGroup = styled.div({
  display: "flex",
  gap: 10,
  width: "100%",
});

const Input = styled.input({
  flex: 1,
  padding: "10px 14px",
  fontSize: 16,
  borderRadius: 8,
  border: "1px solid #ccc",
  outline: "none",
  boxSizing: "border-box",
});

const AddButton = styled.button({
  padding: "10px 20px",
  fontSize: 14,
  backgroundColor: "#4CAF50",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#45a049",
  },
});

const List = styled.div({
  flex: 1,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  paddingRight: 4,
  maxHeight: "calc(90vh - 130px)", // input balandligini hisobga olib scroll boshqariladi
  scrollbarWidth: "thin",
  scrollbarColor: "#ccc transparent",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#ccc",
    borderRadius: "4px",
  },
});

export const TodoList: React.FC = () => {
  const [task, setTask] = useState("");
  const { todos, addTodo } = useTodoStore();

  const handleAddTodo = () => {
    if (task.trim()) {
      addTodo(task.trim());
      setTask("");
    }
  };

  return (
    <Wrapper>
      <Card>
        <InputGroup>
          <Input
            type="text"
            placeholder="Yangi todo qo‘shing..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
          />
          <AddButton onClick={handleAddTodo}>Qo‘shish</AddButton>
        </InputGroup>
        <List>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </List>
      </Card>
    </Wrapper>
  );
};
