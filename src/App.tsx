import React from "react";
import { TodoList } from "./components/TodoList";
import { GlobalStyles } from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <TodoList />
    </>
  );
};

export default App;
