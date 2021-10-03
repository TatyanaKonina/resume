
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers : []
})



export class AppComponent {
 appState='on'
 handleChange():void{
   console.log(this.appState)
 }
}
