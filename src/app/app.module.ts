import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CivilizationsComponent } from './civilizations/civilizations.component';
import { UnitsComponent } from './units/units.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { StructuresComponent } from './structures/structures.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ModalComponent } from './modal/modal.component';
import { VideoAgeComponent } from './video-age/video-age.component';

@NgModule({
  declarations: [
    AppComponent,
    CivilizationsComponent,
    UnitsComponent,
    TechnologiesComponent,
    StructuresComponent,
    TopBarComponent,
    ModalComponent,
    VideoAgeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
