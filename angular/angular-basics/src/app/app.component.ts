
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppCounterService } from './services/app-counter.service';
import { LocalcalCounterService } from './services/localcal-counter.service';

export interface Post{
  title:string
  text:string
  [key : string]: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers : [LocalcalCounterService]
})



export class AppComponent {
  constructor(public appCounterService: AppCounterService,
    public localCounterService: LocalcalCounterService){
  }
}
