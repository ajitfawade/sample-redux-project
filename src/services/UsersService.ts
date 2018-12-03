import axios from 'axios';
import { IUserModelProps, UserModel } from '../Models/UserModel';

export async function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
        let response = await axios.get(url);
        let users = response.data.items;
        console.log('Printing Response: ', response);
        console.log('printing users: ',users);
    } catch(error) {
        throw error;
    }
}