import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-a-signup',
  templateUrl: './a-signup.component.html',
  styleUrls: ['./a-signup.component.scss'],
})
export class ASignupComponent  implements OnInit {
  
  user = {
    name: '',
    email: '',
  };


  constructor(private modalController: ModalController) {}

  async dismissModal() {
    await this.modalController.dismiss();
  }

  saveUserData() {
    // Implement logic to save user data (e.g., to local storage or a server)
    console.log('User data saved:', this.user);

    // Close the modal
    this.dismissModal();
  }

  ngOnInit() {}

}
