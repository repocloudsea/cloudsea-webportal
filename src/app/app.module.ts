import { AdminCenterModule } from './admin-center/admin-center.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/errors/not-found/not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdminCenterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
