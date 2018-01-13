import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { CarouselItemComponent } from './components/slider/carousel-item/carousel-item.component';
import { ContentPanelComponent } from './components/content-panel/content-panel.component';
import { ParagraphPanelComponent } from './components/content-panel/paragraph-panel/paragraph-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    CarouselItemComponent,
    ContentPanelComponent,
    ParagraphPanelComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
