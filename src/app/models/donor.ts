import { Gift } from './gift';

export interface Donor {
    id: number;
    name: string;
    email: string;
    phone: string;
    gifts: Gift[];
}