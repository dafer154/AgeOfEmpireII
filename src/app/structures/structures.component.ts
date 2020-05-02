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
  urlImg: string;


  constructor(private dataService: AgeDataService) { }

  ngOnInit(): void {
    this.getStructures();
  }

  getStructures() {
    this.dataService.getStructures().subscribe(res => {
      this.structures = res.structures;
      this.structure = res.structures[0]
      console.log('jujuj', this.structure.name)
      //this.selectImage(res.civilizations[0].name)
    })
  }


  selectStructures(structure: any) {
    this.structure = structure;
    //this.selectImage(structure.name);
  }

}
