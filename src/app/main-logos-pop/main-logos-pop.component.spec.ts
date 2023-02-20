import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLogosPopComponent } from './main-logos-pop.component';

describe('MainLogosPopComponent', () => {
  let component: MainLogosPopComponent;
  let fixture: ComponentFixture<MainLogosPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLogosPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLogosPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
