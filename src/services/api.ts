import { BASE_URL } from "../constants";
import axios from "axios";

type UserProps = {
    id: string;
    name: string;
    email: string;
};

const api = axios.create({
    baseURL: `${BASE_URL}`,
});

export const getUsers = async (): Promise<UserProps> => {
    const response = await api.get("/users");
    return response.data;
};
