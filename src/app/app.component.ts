import { Component } from '@angular/core';

export class Weather {
  city: String
  conditions: String
  temperature: number
  icon: string
  sunrise: string
  sunset: string
  humidity: number
  description: string
  wind: number
  feels: number
  high: number
  low: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myWeather';
}
