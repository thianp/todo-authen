import { createContext, useState, useEffect } from "react";
import axios from "../config/axios";

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState([]);

  const createTodo = (title) => {
    axios
      .post(
        "/todo",
        { title, completed: false }
      )
      .then((res) => {
        const newTodo = res.data.todo;
        const newTodoList = [newTodo, ...todoList];
        setTodoList(newTodoList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeTodo = (id) => {
    axios
      .delete(`/todo/${id}`)
      .then(() => {
        const idx = todoList.findIndex((el) => el.id === id);
        if (idx !== -1) {
          const clonedTodoList = [...todoList];
          clonedTodoList.splice(idx, 1);
          setTodoList(clonedTodoList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTodo = (newValue, id) => {
    axios
      .patch("/todo/" + id, newValue)
      .then(() => {
        const idx = todoList.findIndex((el) => el.id === id);
        if (idx !== -1) {
          const clonedTodoList = [...todoList];
          clonedTodoList[idx] = { ...clonedTodoList[idx], ...newValue };
          setTodoList(clonedTodoList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8002/api/todo")
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <TodoContext.Provider
      value={{ todoList, createTodo, removeTodo, updateTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoContextProvider };
