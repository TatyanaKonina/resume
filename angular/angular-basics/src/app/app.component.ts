import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'DYNAMIC TITLE'
  val = ''
  onInput(event: Event){
    this.val = (event.target as HTMLInputElement).value
  }
  onClick(){
    console.log('click')
  }
  onBlur(str:string){
    this.val = str

  }
 
}
