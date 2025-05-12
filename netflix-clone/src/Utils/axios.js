import axios from "axios";
const API_KEY = "7d20ff195f9c2af5da863af9848d2550";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;