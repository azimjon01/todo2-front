import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";

interface Todo {
  id: string; // Use string ID for UUID
  task: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (task: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (task) =>
    set((state) => ({
      todos: [...state.todos, { id: uuidv4(), task, completed: false }],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
}));
