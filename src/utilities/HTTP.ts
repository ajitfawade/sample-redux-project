import axios, { AxiosResponse } from 'axios';

const axioInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export async function get(url: string, data: Object = {}): Promise<AxiosResponse> {
    const response = await axioInstance.get(url, data);
    return response;
}

export async function post(url: string, data: Object = {}): Promise<AxiosResponse> {
    const response = await axioInstance.post(url, data);
    return response;
}

export async function put(url: string, data: Object = {}): Promise<AxiosResponse> {
    const response = await axioInstance.put(url, data);
    return response;
}

export async function deleteItem(url: string, data: Object = {}): Promise<AxiosResponse> {
    const response = await axioInstance.delete(url, data);
    return response;
}
