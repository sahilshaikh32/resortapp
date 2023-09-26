import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ASignupComponent } from './a-signup/a-signup.component';
import { CardComponent } from './card/card.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent,ASignupComponent,CardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[HeaderComponent,ASignupComponent,CardComponent]
})
export class SharedComponentsModule { }
