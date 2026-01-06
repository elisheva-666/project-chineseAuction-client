import { User } from './user';
import { OrderItem } from './order-item';

export enum Status {
    IsDraft = 'IsDraft',
    IsConfirmed = 'IsConfirmed'
}

export interface Order {
    id: number;
    orderDate: Date;
    status: Status;
    totalAmount: number;
    userId: number;
    user: User;
    orderItems: OrderItem[];
}