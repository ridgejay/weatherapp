import { Component, OnInit } from '@angular/core';
import { Weather } from '../../app.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  weather: Weather = {
    city: 'No City',
    conditions: '-',
    temperature: 0,
    icon: '',
    sunrise: '',
    sunset: '',
    humidity: 0,
    description: '',
    wind: 0,
    feels: 0,
    high: 0,
    low: 0
   
  }

  update(weather: Weather) {
    this.weather = weather
  }

  constructor() { }

  ngOnInit() {
  }

}
