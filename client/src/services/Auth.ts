import DefaultAxios from "./DefaultAxios";


export const login = async (credentials: any) => {
    return await DefaultAxios.post('/auth/login', credentials);
}