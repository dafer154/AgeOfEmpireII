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
  urlImg: string;

  constructor(private dataService: AgeDataService) { }

  ngOnInit(): void {
    this.getTechnologies();
  }

  getTechnologies() {
    this.dataService.getTechnologies().subscribe(res => {
      this.technologies = res.technologies;
      this.technology = res.civilizations[0]
      console.log('jujuj', this.technology.name)
      this.selectImage(res.civilizations[0].name)
    })
  }


  selectTechnologies(technology: any) {
    this.technology = technology;
    this.selectImage(technology.name);
  }

  selectImage(imageUrl: any) {

    switch (imageUrl) {
      case "Aztecs":
        this.urlImg = "../../assets/civilizations/menu_techtree_aztecs.png"
        break;
      case "Britons":
        this.urlImg = "../../assets/civilizations/menu_techtree_britons.png"
        break;
      case "Bizantines":
        this.urlImg = "../../assets/civilizations/menu_techtree_byzantines.png"
        break;
      case "Celts":
        this.urlImg = "../../assets/civilizations/menu_techtree_celts.png"
        break;
      case "Chinese":
        this.urlImg = "../../assets/civilizations/menu_techtree_chinese.png"
        break;
      case "Franks":
        this.urlImg = "../../assets/civilizations/menu_techtree_franks.png"
        break;
      case "Franks":
        this.urlImg = "../../assets/civilizations/menu_techtree_franks.png"
        break;
      case "Goths":
        this.urlImg = "../../assets/civilizations/menu_techtree_goths.png"
        break;
      case "Huns":
        this.urlImg = "../../assets/civilizations/menu_techtree_huns.png"
        break;
      case "Japanese":
        this.urlImg = "../../assets/civilizations/menu_techtree_japanese.png"
        break;
      case "Koreans":
        this.urlImg = "../../assets/civilizations/menu_techtree_koreans.png"
        break;
      case "Mayans":
        this.urlImg = "../../assets/civilizations/menu_techtree_mayans.png"
        break;
      case "Mongols":
        this.urlImg = "../../assets/civilizations/menu_techtree_mongols.png"
        break;
      case "Persians":
        this.urlImg = "../../assets/civilizations/menu_techtree_persians.png"
        break;
      case "Saracens":
        this.urlImg = "../../assets/civilizations/menu_techtree_saracens.png"
        break;
      case "Spanish":
        this.urlImg = "../../assets/civilizations/menu_techtree_spanish.png"
        break;
      case "Teutons":
        this.urlImg = "../../assets/civilizations/menu_techtree_teutons.png"
        break;
      case "Turks":
        this.urlImg = "../../assets/civilizations/menu_techtree_turks.png"
        break;
      case "Vikings":
        this.urlImg = "../../assets/civilizations/menu_techtree_vikings.png"
        break;
      default:
        break;
    }
  }
}
