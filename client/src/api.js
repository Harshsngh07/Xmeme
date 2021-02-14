import axios from "axios";
const url = "https://crio-xmeme-hs.herokuapp.com/memes";

export const fetchMemes = () => axios.get(url);
export const createMemes = (newMeme) => axios.post(url, newMeme);
export const updateMeme = (id, updatedMeme) =>
  axios.patch(`${url}/${id}`, updatedMeme);
export const likeMeme = (id) => axios.patch(`${url}/${id}/likeMeme`);
export const deleteMeme = (id) => axios.delete(`${url}/${id}`);
