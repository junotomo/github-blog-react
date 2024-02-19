import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.github.com/',
    paramsSerializer: {
        encode: (param) => encodeURIComponent(param).replace(' ', '%20'),
      },
})