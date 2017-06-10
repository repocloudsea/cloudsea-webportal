// Core includes
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Child NgModules
import { SharedModule } from './shared/shared.module';
import { AdminCenterModule } from './admin-center/admin-center.module';
import { ExaminationModule } from './examination/examination.module';

// Services
import { NetworkingService } from './shared/networking.service';

// Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/errors/not-found/not-found.component';
import { HeaderComponent } from './core/header/header.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { FooterComponent } from './core/footer/footer.component';

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
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    AdminCenterModule,
    ExaminationModule
  ],
  providers: [
    NetworkingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
