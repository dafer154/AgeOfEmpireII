import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CivilizationsComponent } from './civilizations/civilizations.component';
import { UnitsComponent } from './units/units.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { StructuresComponent } from './structures/structures.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ModalComponent } from './modal/modal.component';
import { VideoAgeComponent } from './video-age/video-age.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

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
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
