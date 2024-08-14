import axios from "axios";
const request = axios.create({
  withCredentials: true,
});
//const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
//export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const USERS_API = 'https://react-app-node-server-6.onrender.com/api/users';

export const signin = async (credentials: any) => {
  const response = await request.post( `${USERS_API}/signin`, credentials );
  return response.data;
};

export const profile = async () => {
    const response = await request.post(`${USERS_API}/profile`);
    return response.data;
  };

export const signup = async (user: any) => {
    const response = await request.post(`${USERS_API}/signup`, user);
    return response.data;
  };

  export const signout = async () => {
    const response = await request.post(`${USERS_API}/signout`);
    return response.data;
  };
  
  export const updateUser = async (user: any) => {
    const response = await request.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};
export const findAllUsers = async () => {
    const response = await request.get(`${USERS_API}`);
    return response.data;
};
export const createUser = async (user: any) => {
    const response = await request.post(`${USERS_API}`, user);
    return response.data;
};
export const findUserById = async (userId: any) => {
    const response = await request.get(`${USERS_API}/${userId}`);
    return response.data;
};
export const deleteUser = async (user: any) => {
    const response = await request.delete(
      `${USERS_API}/${user._id}`);
    return response.data;
};




  