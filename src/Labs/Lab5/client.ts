import axios from "axios";
const REMOTE_SERVER = "http://localhost:4000";

// Fetch Welcome Message
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};

// Fetch Assignment
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
  const response = await axios.get(ASSIGNMENT_API);
  return response.data;
};

// Update Assignment Title
export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};

// Fetch Todos
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};

// Delete Todo
export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};

// Post Todo
export const postTodo = async (todo: any) => {
  const response = await axios.post(TODOS_API, todo);
  return response.data;
};

// Update Todo
export const updateTodo = async (todo: any) => {
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};

// Create Todo
export const createTodo = async () => {
  const response = await axios.post(TODOS_API, {
    title: "New Todo",
    completed: false,
  });
  return response.data;
};
