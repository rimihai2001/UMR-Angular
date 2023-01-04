import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllConcertsPageComponent } from './all-concerts-page.component';

describe('AllConcertsPageComponent', () => {
  let component: AllConcertsPageComponent;
  let fixture: ComponentFixture<AllConcertsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllConcertsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllConcertsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
