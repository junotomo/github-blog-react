import axios from "axios";
import qs from 'qs';

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    paramsSerializer: (params) => qs.stringify(params, { encode: false }),
})