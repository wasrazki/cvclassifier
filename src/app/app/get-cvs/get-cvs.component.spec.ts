import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCvsComponent } from './get-cvs.component';

describe('GetCvsComponent', () => {
  let component: GetCvsComponent;
  let fixture: ComponentFixture<GetCvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCvsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
