import { Component, OnInit } from '@angular/core';
import { AgeDataService } from '../age-data.service';


@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  units = [];
  unit : any;
  urlImg = '../../assets/logos/ageImage.jpg';



  constructor(private dataService: AgeDataService) { }

  ngOnInit(): void {
    this.getUnits();
  }

  getUnits() {
    this.dataService.getUnits().subscribe(res => {
      this.units = res.units;
      this.unit = res.units[0]
      this.selectImage()
    })
  }


  selectUnit(unit: any) {
    this.unit = unit;
    this.selectImage();
  }


  selectImage() {
    return this.urlImg = '../../assets/logos/ageImage.jpg';
  }
}
