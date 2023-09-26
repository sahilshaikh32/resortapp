import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
  cards = [
    {
      card_id: 1,
      name: "Redheart",
      imageUrl : '../../../assets/image/arizona.webp'
    },
    {
      card_id: 2,
      name: "WOW Resort",
      imageUrl : '../../../assets/image/california.webp'
    },
    {
      card_id: 3,
      name: "Maliblue",
      imageUrl : '../../../assets/image/florida.webp'
    },
    
    ]
  constructor() { }
  swiperSlideChanged(e: any) {
    console.log('changed:' , e);
  }
  ngOnInit() {
  }

}
