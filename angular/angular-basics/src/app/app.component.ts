import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
   title = 'DYNAMIC TITLE'
  img = 'https://appfort.ru/images/react.svg'
  constructor(){
    setTimeout(()=> {
      this.img = 'https://avatars.mds.yandex.net/i?id=75f389b1e4e4dedf1f921083428a04c5-5165489-images-thumbs&n=13'
    },5000)
  }
 
}
