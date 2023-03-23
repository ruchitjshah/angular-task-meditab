import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { CardComponent } from './card/card.component';

const appRoute:Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component:HomeComponent },
  { path:'about', component:AboutComponent },
  { path:'blog', component:BlogComponent },
  { path:'contact', component:ContactComponent},
  { path:'not-found', component:PagenotfoundComponent},
  { path:'**', redirectTo: 'not-found'}
];

// children:[
//     {path:'home/about', component:AboutComponent},
//     {path:'home/blog', component:BlogComponent}
//   ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainCompComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PagenotfoundComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
