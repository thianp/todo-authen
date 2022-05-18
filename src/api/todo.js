import axios from "axios";

export const getAllTodo = async () => {
  return axios
    .get("/todos")
    .then((res) => res.data)
    .catch((err) => err);
};
