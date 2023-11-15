import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: "http://localhost:5042/api"
    }
);

export const createInqury
    = (inquiry) => apiClient.post(`/inquiries`, inquiry);