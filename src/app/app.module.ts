import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
   providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
