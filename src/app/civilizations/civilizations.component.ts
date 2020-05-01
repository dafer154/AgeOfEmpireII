import { Component, OnInit } from '@angular/core';
import { AgeDataService } from '../age-data.service';

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.css']
})
export class CivilizationsComponent implements OnInit {

  civilizations = [];


  constructor(private dataService: AgeDataService) { }

  ngOnInit(): void {
    this.getCivilizations();
  }

  getCivilizations() {
    this.dataService.getCivilizations().subscribe(res => {
      console.log("civilizations", res)
    })
  }

}
