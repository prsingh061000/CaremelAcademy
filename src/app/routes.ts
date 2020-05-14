import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component'
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'

export const routes: Routes = [
    { path: './homepage/homepage.component', pathMatch: 'full', component: HomepageComponent },
    { path: './navbar/navbar.component', component: NavbarComponent},
    { path: './footer/footer.component', component: FooterComponent},

]