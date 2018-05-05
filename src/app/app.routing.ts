// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
    {
        path: '', component: HomepageComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'careers', component: CareersComponent },
            { path: 'contact', component: ContactComponent }
        ]
    },



];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);