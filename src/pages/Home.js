import { TodoContextProvider } from "../contexts/TodoContext";
import TodoInput from "../components/todo-list/TodoInput";
import TodoList from "../components/todo-list/TodoList";

function Home() {
  return (
  <TodoContextProvider>
    <TodoInput />
    <TodoList />
  </TodoContextProvider>
  );
}

export default Home;
