import { Component, OnInit } from '@angular/core';
import { weatherService } from '../service/weather.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  constructor(private weatherService: weatherService) {}

  ngOnInit() {
    this.weatherService.getData().subscribe((data) => {
      console.log(data);
    });
  }
}
