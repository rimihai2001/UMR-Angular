import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConcertPageComponent } from './add-concert-page.component';

describe('AddConcertPageComponent', () => {
  let component: AddConcertPageComponent;
  let fixture: ComponentFixture<AddConcertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConcertPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConcertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
