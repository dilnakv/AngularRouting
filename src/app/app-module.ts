import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Courses } from './courses/courses';
import { Banner } from './home/banner/banner';
import { ContactUs } from './home/contact-us/contact-us';
import { Popular } from './home/popular/popular';
import { Services } from './home/services/services';
import { Testimony } from './home/testimony/testimony';
import { NotFound } from './not-found/not-found';
import { CourseDetails } from './courses/course-details/course-details';

const routes: Routes = [
  {path: '', component: Home},
  // {path:'', redirectTo: 'Home', pathMatch:'full'},
  {path: 'Home', component: Home},
  {path: 'About', component: About},
  {path: 'Contact', component: Contact},
  {path: 'Courses', component: Courses},
  {path: 'Courses/Course/:id', component: CourseDetails},
  {path: '**', component: NotFound}
]

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    About,
    Contact,
    Courses,
    Banner,
    ContactUs,
    Popular,
    Services,
    Testimony,
    NotFound,
    CourseDetails
,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
