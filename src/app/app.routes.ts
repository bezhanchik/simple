import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { GeneralComponent } from './general-component/general-component';
import { SecondPageComponent } from './second-page-component/second-page-component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'general', component: GeneralComponent},
    {path: 'second', component:SecondPageComponent}
];
