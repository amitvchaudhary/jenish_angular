import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewHouseComponent } from './new-house/new-house.component';
import { from } from 'rxjs';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    NewHouseComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
