import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCompComponent } from './item-comp.component';

describe('ItemCompComponent', () => {
  let component: ItemCompComponent;
  let fixture: ComponentFixture<ItemCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
