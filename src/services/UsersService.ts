import { get, post, put, deleteItem } from '../utilities/HTTP';
import { IUserModelProps, UserModel } from '../Models/UserModel';

export async function getUsers() {
    const url = 'users';
    try {
        let response = await get(url);
        if (response.data.length) {
            UserModel.saveAll(response.data.map(item => new UserModel(item)));
        }
    } catch (error) {
        throw error;
    }
}
