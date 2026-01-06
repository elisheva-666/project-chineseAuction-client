import { Gift } from './gift';
import { User } from './user';

export interface Winner {
    id: number;
    giftId: number;
    gift: Gift;
    userId: number;
    user: User;
}