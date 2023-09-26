import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingformPageRoutingModule } from './bookingform-routing.module';

import { BookingformPage } from './bookingform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingformPageRoutingModule
  ],
  declarations: [BookingformPage]
})
export class BookingformPageModule {
  
}
