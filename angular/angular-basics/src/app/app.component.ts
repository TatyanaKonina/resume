import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
 title = 'initial'
 onInput(event:Event){
   this.title = (<HTMLInputElement>event.target).value
 }
}
