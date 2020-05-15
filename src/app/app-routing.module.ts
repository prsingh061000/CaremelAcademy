import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
  { path: 'homepage', pathMatch: 'full', component: HomepageComponent },
  { path: './navbar/navbar.component', component: NavbarComponent},
  { path: './footer/footer.component', component: FooterComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'aboutus', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ContactusComponent,
  HomepageComponent,
  NavbarComponent,
  AboutusComponent,
  FooterComponent,
]
