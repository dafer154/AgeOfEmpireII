import { Component, OnInit } from '@angular/core';
import { AgeDataService } from '../age-data.service';
import * as civsImages from '../civilizations/imagesCivilizations'

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.css']
})
export class CivilizationsComponent implements OnInit {

  civilizations = [];
  civilization: any;
  urlImg: string;
  iconsCivilizations = civsImages.civilizations_images;


  constructor(private dataService: AgeDataService) { }

  ngOnInit(): void {
    this.getCivilizations();
  }

  getCivilizations() {
    this.dataService.getCivilizations().subscribe(res => {
      this.civilization = res.civilizations[0]
      this.civilizations = res.civilizations;
      this.selectImage(res.civilizations[0].name)
    })
  }


  selectCivilization(civilization: any) {
    this.civilization = civilization;
    this.selectImage(civilization.name);
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
