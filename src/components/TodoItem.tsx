import React from "react";
import { useTodoStore } from "../store/todoStore";
import styled from "@emotion/styled";

const TodoItemContainer = styled.div<{ completed: boolean }>(
  ({ completed }) => ({
    backgroundColor: completed ? "lightgreen" : "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 10px",
    cursor: "pointer",
  }),
);

const TodoText = styled.span<{ completed: boolean }>`
  font-size: 16;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

const Button = styled.button({
  padding: "10px 20px",
  "&:hover": {
    background: "red",
  },
});

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
      <Button
        onClick={(e) => {
          e.stopPropagation();
          removeTodo(todo.id);
        }}
      >
        O‘chirish
      </Button>
    </TodoItemContainer>
  );
};
