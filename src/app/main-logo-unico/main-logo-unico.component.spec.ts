import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLogoUnicoComponent } from './main-logo-unico.component';

describe('MainLogoUnicoComponent', () => {
  let component: MainLogoUnicoComponent;
  let fixture: ComponentFixture<MainLogoUnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLogoUnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLogoUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
