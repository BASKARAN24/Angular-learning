//route.ts is the file routing is configured
import { Routes } from '@angular/router';
import { Home } from './home/home';//import all the components like home,products...
import { Products } from './products/products';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path:'',component:Home},//this assigns the url in app.html file with the respective component
    {path:'products',component:Products},
    {path:'about',component:About},
    {path: 'contact',component:Contact}
];
