import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLightboxComponent } from './main-lightbox.component';

describe('MainLightboxComponent', () => {
  let component: MainLightboxComponent;
  let fixture: ComponentFixture<MainLightboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLightboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
