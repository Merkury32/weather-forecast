import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { weatherService } from '../service/weather.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DailyComponent implements OnInit {
  constructor(private weatherService: weatherService) {}

  // Deklaracje globalnych parametrów

  currentCity: string;

  currentTemperature: string;
  currentFeelsTemperature: string;
  currentWeather: string;
  currentTime: string;

  dailyTemperature = [];
  dailyWeather = [];
  daysNumbers = [];
  days = [];

  ngOnInit() {
    // Pobieranie lokalizacji

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((data) => {
        this.showWeather(data.coords.latitude, data.coords.longitude);

        // Wywoływanie funkcji przekształcającej koordynaty na nazwe miasta
        this.weatherService
          .getCity(data.coords.latitude, data.coords.longitude)
          .subscribe((data: any) => {
            this.currentCity = data.locality;
          });
      });
    }
  }

  // Funkcja pokazująca pogode na ekranie
  showWeather(latitude: number, longitude: number) {
    this.weatherService.getWeather(latitude, longitude).subscribe((data) => {
      // Zapisanie danych o wschodzie i zachodzie słońca
      let sunrise = data[4].sunrise;
      let sunset = data[4].sunset;

      // Wywołnie funkcji zmieniającej tło w zależności od pory dnia
      this.changeBackground(sunrise, sunset);

      // Przekształcanie danych z API dotyczących aktualnej pogody
      this.currentTemperature = Math.round(data[4].temp) + ' °C';
      this.currentFeelsTemperature = Math.round(data[4].feels_like) + ' °C';
      this.currentWeather = data[4].weather[0].description;
      this.currentWeather =
        this.currentWeather.charAt(0).toUpperCase() +
        this.currentWeather.slice(1);

      // Przekształcanie danych z API dotyczące pogody dziennej
      for (let i = 0; i < 8; i++) {
        this.dailyTemperature.push(
          Math.round(data[7][i].temp.day) +
            '° / ' +
            (Math.round(data[7][i].temp.night) + '°')
        );

        this.dailyWeather.push(data[7][i].weather[0].id);
      }

      // Tworzenie listy dni bazując na dzisiejszym dniu

      let date = new Date().getDay();

      this.days.push(
        'Niedziela',
        'Poniedziałek',
        'Wtorek',
        'Środa',
        'Czwartek',
        'Piątek',
        'Sobota'
      );

      for (let j = date; j <= 6; j++) {
        this.daysNumbers.push(j);
      }

      for (let k = 0; k <= date; k++) {
        this.daysNumbers.push(k);
      }
    });

    this.currentTime = this.weatherService.getDate();
  }

  // Funkcja odpowiedzialna za zmiane tła
  changeBackground(sunrise: number, sunset: number) {
    let currentUTC = Math.floor(new Date().getTime() / 1000);

    if (currentUTC > sunrise && currentUTC < sunset) {
      document.body.className = 'body-day';
    } else {
      document.body.className = 'body-night';
    }
  }
}
