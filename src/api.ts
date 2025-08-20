// axios instance singleton that will be called from the service
// we configure the axios instance here

import axios from "axios";

export const api = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 12000 // 12s timeout
})