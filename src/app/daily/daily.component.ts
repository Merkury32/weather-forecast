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
    document.body.className = 'body-night';
    console.log(document.documentElement.clientHeight);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((data) => {
        this.showWeather(data.coords.latitude, data.coords.longitude);

        this.weatherService
          .getCity(data.coords.latitude, data.coords.longitude)
          .subscribe((data) => {
            this.currentCity = data.locality;
          });
      });
    }
  }

  showWeather(latitude: number, longitude: number) {
    this.weatherService.getWeather(latitude, longitude).subscribe((data) => {
      console.log(data);

      this.currentTemperature = Math.round(data[4].temp) + ' °C';
      this.currentFeelsTemperature = Math.round(data[4].feels_like) + ' °C';
      this.currentWeather = data[4].weather[0].description;
      this.currentWeather =
        this.currentWeather.charAt(0).toUpperCase() +
        this.currentWeather.slice(1);

      for (let i = 0; i < 8; i++) {
        this.dailyTemperature.push(
          Math.round(data[7][i].temp.day) +
            '° / ' +
            (Math.round(data[7][i].temp.night) + '°')
        );

        this.dailyWeather.push(data[7][i].weather[0].id);

        console.log(this.dailyWeather);
        console.log(this.dailyTemperature);
      }

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
      console.log(this.days);

      for (let j = date; j <= 6; j++) {
        this.daysNumbers.push(j);
      }

      for (let k = 0; k <= date; k++) {
        this.daysNumbers.push(k);
      }

      console.log(this.daysNumbers);
    });

    this.currentTime = this.weatherService.getDate();
  }
}
