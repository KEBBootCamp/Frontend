import axios from "axios";

export const api = axios.create({
    baseURL: "http://43.202.215.195:8080/",
});
