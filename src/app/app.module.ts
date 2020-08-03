import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomDayPipe } from './custompipe/day.pipe';
import { Constants } from './constant/constants'
import { CustomVinNoPipe} from './custompipe/no.pipe'
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CustomDayPipe,
    CustomVinNoPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
  ],
    providers: [Constants],
  bootstrap: [AppComponent]
})
export class AppModule { }
