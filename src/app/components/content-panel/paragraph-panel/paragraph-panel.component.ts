import {Component, OnInit, Input, SimpleChanges, ElementRef, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-paragraph-panel',
  templateUrl: './paragraph-panel.component.html',
  styleUrls: ['./paragraph-panel.component.css']
})
export class ParagraphPanelComponent implements OnInit {
  @Input('id') id: string;
  @Input('lang') language: string;
  @Input('content') content: string;
  @Input('header') paragraph_header: string = 'loading..';
  @Input('video') video_url:string = '';
  @ViewChild('fireContent') fireContent: ElementRef;

  paragraph_content: string = '';
  paragraph_content_2: string = '';

  constructor(public dataService: DataService,public sanitizer: DomSanitizer) {
  }

  updateContentLanguage() {
    this.dataService.getContent(this.content).subscribe(data => {
      this.paragraph_content = data['content'];
      this.paragraph_header = data['header'];
      if (data['content_extra'] !== undefined) this.paragraph_content_2 = data['content_extra'];
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateContentLanguage();

  }

  ngOnInit() {
  }

}
