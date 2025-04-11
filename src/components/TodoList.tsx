import React, { useState } from "react";
import { useTodoStore } from "../store/todoStore";
import { TodoItem } from "./TodoItem";
import styled from "@emotion/styled";

const TodoListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TodoInput = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const TodoList: React.FC = () => {
  const [task, setTask] = useState("");
  const { todos, addTodo } = useTodoStore();

  const handleAddTodo = () => {
    if (task) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <TodoListContainer>
      <TodoInput
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Yangi todo qo‘shing..."
      />
      <button onClick={handleAddTodo}>Qo‘shish</button>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </TodoListContainer>
  );
};
