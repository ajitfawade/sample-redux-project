import { BaseModel } from './BaseModel';

export interface IUserModelProps {
    id?: string;
    name?: string;
    username?: string;
    email?: string;
    address?: [
        {
            street?: string,
            suit?: string,
            city?: string,
            zipcode?: string,
            geo?: {
                lat?: string,
                lng?: string,
            }
        }
    ];
    phone?: string;
    website?: string;
    company?: {
        name?: string,
        catchPhrase?: string,
        bs?: string,
    }
}

export class UserModel extends BaseModel<IUserModelProps> {
    constructor(properties: IUserModelProps) {
        super(properties);
    }
    static resource = 'user';
}