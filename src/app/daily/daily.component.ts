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

  currentTemperature: number;
  currentFeelsTemperature: number;
  currentWeather;

  ngOnInit() {
    document.body.className = 'body-night';
    console.log(document.documentElement.clientHeight);

    this.weatherService.getData().subscribe((data) => {
      console.log(data);

      this.currentTemperature = data[4].temp;
      this.currentFeelsTemperature = data[4].feels_like;
      this.currentWeather = data[4].weather[0].description;
    });
  }
}
