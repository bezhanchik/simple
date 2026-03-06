import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { GeneralComponent } from './general-component/general-component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'general', component: GeneralComponent}
];
