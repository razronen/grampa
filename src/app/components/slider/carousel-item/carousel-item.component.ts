import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  @Input('src') src: string;
  @Input('alt') alt: string;
  @Input('title') title: string;
  @Input('text') text: string;

  constructor() { }

  ngOnInit() {
  }

}
