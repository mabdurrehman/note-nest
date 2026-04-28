import axios from "axios";

const API = "http://localhost:3000/api";

export const getNotes = () => axios.get(`${API}/notes`);
export const updateNote = (id, content) =>
    axios.put(`${API}/notes/${id}`, { content });

export const createNote = (content) =>
    axios.post(`${API}/notes`, { content });

export const deleteNote = (id) =>
    axios.delete(`${API}/notes/${id}`);
