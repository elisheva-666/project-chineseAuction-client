import { Order } from './order';

export enum Role {
    Admin = 'Admin',
    Purchaser = 'Purchaser'
}

export interface User {
    id: number;
    name: string;
    email: string;
    passwordHash: string;
    phone: string;
    role: Role;
    orders: Order[];
}