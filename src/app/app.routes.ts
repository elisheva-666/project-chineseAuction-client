import { Routes } from '@angular/router';
import { Home } from '../app/components/purchaser/home/home';
import { RegisterComponent } from '../app/components/auth/register/register';
import { LoginComponent } from '../app/components/auth/login/login';
import { GiftGallery } from '../app/components/purchaser/gift-gallery/gift-gallery';

export const routes: Routes = [

    { path: '', component: Home },
    { path: 'register', component:RegisterComponent  },
    { path: 'login', component: LoginComponent },
    { path: 'gift', component: GiftGallery },
];
