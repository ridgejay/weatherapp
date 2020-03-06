import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherdataService } from '../../services/weatherdata.service';
import { Weather } from '../../app.component';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  @Output() onSelection: EventEmitter<Weather>
  = new EventEmitter<Weather>()
  weather: Weather = new Weather()
  city: string = ""

  constructor(private weatherData: WeatherdataService) { }

  submit() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city = data['name']
      this.weather.conditions = data['weather'][0]['main']
       this.weather.description = data["weather"][0]['description'];
      this.weather.temperature = Math.round((data['main']['temp'] - 273.15)*1.8 + 32)
      this.weather.feels = Math.round(
        (data['main']['feels_like'] - 273.15) * 1.8 + 32
      );
      this.weather.high = Math.round(
        (data['main']['temp_max'] - 273.15) * 1.8 + 32
      );
      this.weather.low = Math.round(
        (data["main"]["temp_min"] - 273.15) * 1.8 + 32
      );
      this.weather.humidity = data['main']['humidity']
      this.weather.wind = data["wind"]["speed"];
      this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])

      this.onSelection.emit(this.weather)
    })
  }

  ngOnInit() {
  }

}
