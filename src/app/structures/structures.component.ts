import { Component, OnInit } from '@angular/core';
import { AgeDataService } from '../age-data.service';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
export class StructuresComponent implements OnInit {

  structures = [];
  structure : any;
  urlImg = '../../assets/logos/ageImage.jpg';


  constructor(private dataService: AgeDataService) { }

  ngOnInit(): void {
    this.getStructures();
  }

  getStructures() {
    this.dataService.getStructures().subscribe(res => {
      this.structures = res.structures;
      this.structure = res.structures[0]
      this.selectImage()
    })
  }


  selectStructure(structure: any) {
    this.structure = structure;
    this.selectImage();
  }

  
  selectImage() {
    return this.urlImg = '../../assets/logos/ageImage.jpg';
  }

}
