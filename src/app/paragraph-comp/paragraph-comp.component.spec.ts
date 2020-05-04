import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphCompComponent } from './paragraph-comp.component';

describe('ParagraphCompComponent', () => {
  let component: ParagraphCompComponent;
  let fixture: ComponentFixture<ParagraphCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
