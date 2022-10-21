import axios from 'axios'

const url = "http://localhost:5000/api/posts";

export const fetchUsers = () => axios.get(url);
export const createUser = (newUser) => axios.post(url, newUser); 
export const updateUser = (id, updatedPost) => axios.put(`${url}/${id}`, updatedPost);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);
