import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivedPropertyComponent } from './derived-property.component';

describe('DerivedPropertyComponent', () => {
  let component: DerivedPropertyComponent;
  let fixture: ComponentFixture<DerivedPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerivedPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
