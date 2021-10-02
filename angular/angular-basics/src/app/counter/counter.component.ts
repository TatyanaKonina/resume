import { Component, OnInit } from '@angular/core';
import { AppCounterService } from '../services/app-counter.service';
import { LocalcalCounterService } from '../services/localcal-counter.service';
// import { AppCounterService } from './services/app-counter.service';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass'],
  providers: [LocalcalCounterService]
})
export class CounterComponent {

  constructor(public appCounterService: AppCounterService,
    public localCounterService: LocalcalCounterService) { }

 

}
