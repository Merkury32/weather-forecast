import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class weatherService {
  constructor(private http: HttpClient) {}

  // Pobierane danych z OpenWeather Api i przekształcanie ich na tablice obiektów
  getWeather(latitude: number, longitude: number) {
    return this.http
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=pl&appid=${environment.weatherApiKey}`
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

  // Ustalanie dzisiejszej daty w formacie dzień miesiąc rok
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

  // Przekształcanie koordynatów geograficznych na nazwe miasta
  getCity(latitude: number, longitude: number) {
    return this.http.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pl`
    );
  }
}
