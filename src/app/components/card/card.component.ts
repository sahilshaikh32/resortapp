import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ASignupComponent } from '../a-signup/a-signup.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

    @Input() card_list:any[] = [];
    constructor(private modalController: ModalController) {}

    async openPopupForm() {
      const modal = await this.modalController.create({
        component: ASignupComponent,
      });
      return await modal.present();
    }

  ngOnInit() {}

}
