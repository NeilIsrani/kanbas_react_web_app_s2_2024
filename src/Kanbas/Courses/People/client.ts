import axios from "axios";
import { model } from "mongoose";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const findAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

export const findUsersByPartialName
  = async (name: string) => {
    const response = await
      axios.get(`${USERS_API}?name=${name}`);
    return response.data;
};


export function findUsersByRole(role: string) {
  throw new Error("Function not implemented.");
}

export const findUserById = async (id: string) => {
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};

export function deleteUser(uid: string) {
    throw new Error("Function not implemented.");
}

export const updateUser = async (user: any) => {
  const response = await
    axios.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const createUser =
  async (user: any) => {
    const response = await
      axios.post(`${USERS_API}`, user);
    return response.data;
};
