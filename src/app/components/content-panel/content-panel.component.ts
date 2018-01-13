import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.css']
})
export class ContentPanelComponent implements OnInit {

  @Input('lang') language: string;
  constructor() { }

  ngOnInit() {
  }

}
