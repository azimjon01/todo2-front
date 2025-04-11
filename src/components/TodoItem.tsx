import React from "react";
import { useTodoStore } from "../store/todoStore";
import styled from "@emotion/styled";

const TodoItemContainer = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${({ completed }) => (completed ? "#e0ffe0" : "#fff")};
  margin-bottom: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const TodoText = styled.span<{ completed: boolean }>`
  flex-grow: 1;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

interface TodoItemProps {
  todo: { id: string; task: string; completed: boolean }; // id type changed to string
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodoStore();

  return (
    <TodoItemContainer
      completed={todo.completed}
      onClick={() => toggleTodo(todo.id)}
    >
      <TodoText completed={todo.completed}>{todo.task}</TodoText>
      <button
        onClick={(e) => {
          e.stopPropagation();
          removeTodo(todo.id);
        }}
      >
        O‘chirish
      </button>
    </TodoItemContainer>
  );
};
