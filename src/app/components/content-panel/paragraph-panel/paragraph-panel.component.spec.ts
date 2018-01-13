import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphPanelComponent } from './paragraph-panel.component';

describe('ParagraphPanelComponent', () => {
  let component: ParagraphPanelComponent;
  let fixture: ComponentFixture<ParagraphPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
