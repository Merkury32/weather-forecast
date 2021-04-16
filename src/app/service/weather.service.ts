import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class weatherService {
  constructor(private http: HttpClient) {}

  getData() {
    let response = this.http.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=52.0887&lon=17.01506&units=metric&exclude=daily,hourly,weekly,minutely&appid=${environment.apiKey}`
    );

    return response;
  }
}
