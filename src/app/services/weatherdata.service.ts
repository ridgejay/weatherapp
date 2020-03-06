import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


let serviceUrl: string = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey: string = "24db5227a2e363a8624f3953e52a9f19";

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private http: HttpClient) { }

  load(city: string) {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey)
  }

  getIconUrl(icon: string) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }
}
