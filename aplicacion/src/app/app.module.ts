import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ListaComponent } from './lista/lista.component';
import { Err404Component } from './err404/err404.component';

const routes: Routes = [
  { path: '', component: BodyComponent , pathMatch: 'full' },
  { path: 'contacto', component: ContactoComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'error404', component: Err404Component },
  { path: '**' , redirectTo: 'error404' , pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavBarComponent,
    ContactoComponent,
    ListaComponent,
    Err404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
