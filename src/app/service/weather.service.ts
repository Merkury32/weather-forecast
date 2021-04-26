import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class weatherService {
  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=52.0887&lon=17.01506&units=metric&lang=pl&exclude=daily,hourly,weekly,minutely&appid=${environment.apiKey}`
      )
      .pipe(
        map((responseData) => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }

  getDate() {
    var date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let months = [
      'Stycznia',
      'Lutego',
      'Marca',
      'Kwietnia',
      'Maja',
      'Czerwca',
      'Lipca',
      'Sierpnia',
      'Września',
      'Października',
      'Listopada',
      'Grudnia',
    ];

    let dateString = `${day} ${months[month]} ${year}`;

    return dateString;
  }
}
