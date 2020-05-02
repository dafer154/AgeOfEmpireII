import { Component, OnInit } from '@angular/core';
import { AgeDataService } from '../age-data.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  technologies = [];
  technology : any;
  urlImg = '../../assets/logos/ageImage.jpg';

  constructor(private dataService: AgeDataService) { }

  ngOnInit(): void {
    this.getTechnologies();
  }

  getTechnologies() {
    this.dataService.getTechnologies().subscribe(res => {
      this.technologies = res.technologies;
      this.technology = res.technologies[0]
      console.log('jujuj', this.technology.name)
      this.selectImage()
    })
  }


  selectTechnology(technology: any) {
    this.technology = technology;
    this.selectImage();
  }

  selectImage() {
    return this.urlImg = '../../assets/logos/ageImage.jpg';
  }

}
