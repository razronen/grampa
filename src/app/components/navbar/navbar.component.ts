import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
name = 'זלמן אקרמן';
  @Output()
  languageChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
  }

}
