import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuItems = [
    {
      title: 'home',
      url: '/',
      icon: 'home-outline'
    },
    {
      title: 'about',
      url: '/about',
      icon: 'information-circle-outline'
    },
    {
      title: 'contact',
      icon: 'call-outline',
      url: '/contact'
    }
  ];
  title = 'home';
  constructor(private menuCtrl: MenuController, private plt: Platform) { }

  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
  }

  setTitle (title:any) {
    this.title = title;
  }
  toggleMenu(width:any) {
    if (width > 768) {
    this.menuCtrl.enable(false, 'myMain');
    } else { 
    this.menuCtrl.enable(true, 'myMain');
    }
  }
}
