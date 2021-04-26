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

  currentTemperature: string;
  currentFeelsTemperature: string;
  currentWeather: string;
  currentTime: string;

  ngOnInit() {
    document.body.className = 'body-night';
    console.log(document.documentElement.clientHeight);

    this.weatherService.getWeather().subscribe((data) => {
      console.log(data);

      this.currentTemperature = Math.round(data[4].temp) + ' °C';
      this.currentFeelsTemperature = Math.round(data[4].feels_like) + ' °C';
      this.currentWeather = data[4].weather[0].description;
    });

    this.currentTime = this.weatherService.getDate();
  }
}
