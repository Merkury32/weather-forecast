import { Component, OnInit } from '@angular/core';
import { weatherService } from '../service/weather.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  constructor(private weatherService: weatherService) {}

  actualTemperature: number;
  feelsTemperature: number;

  ngOnInit() {
    this.weatherService.getData().subscribe((data) => {
      console.log(data);

      this.actualTemperature = data[4].temp;
      this.feelsTemperature = data[4].feels_like;
    });
  }
}
