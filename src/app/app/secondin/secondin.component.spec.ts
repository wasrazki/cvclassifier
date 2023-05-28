import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondinComponent } from './secondin.component';

describe('SecondinComponent', () => {
  let component: SecondinComponent;
  let fixture: ComponentFixture<SecondinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
