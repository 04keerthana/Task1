import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NormalComponent } from './normal/normal.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const allLinks:Routes = [
  {path:'admin',component: AdminComponent},
  {path:'normal',component:NormalComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NormalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
