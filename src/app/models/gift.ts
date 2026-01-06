import { Category } from './category';
import { Donor } from './donor';
import { OrderItem } from './order-item';
import { Winner } from './winner';

export interface Gift {
    id: number;
    name: string;
    description?: string;
    ticketPrice: number;
    imageUrl?: string;
    categoryId: number;
    category?: Category;
    donorId?: number;
    donor?: Donor;
    orderItems?: OrderItem[];
    winner?: Winner;
}