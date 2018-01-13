import {Component, SimpleChanges} from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  language = 'hebrew';
  profile_pic_title = '';

  constructor(public dataService: DataService) {
  }

  languageChanged(lang) {
    this.language = lang;
    this.dataService.setLanguage(lang);
    this.getProfilePicTitle();
  }

  getProfilePicTitle() {
    this.dataService.getContent('profile_pic_header').subscribe(data => {
      this.profile_pic_title = data['header'];
    });
  }

  ngOnInit() {
    this.getProfilePicTitle();
  }
}
