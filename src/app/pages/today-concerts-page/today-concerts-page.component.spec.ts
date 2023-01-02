import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayConcertsPageComponent } from './today-concerts-page.component';

describe('TodayConcertsPageComponent', () => {
  let component: TodayConcertsPageComponent;
  let fixture: ComponentFixture<TodayConcertsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayConcertsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayConcertsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
