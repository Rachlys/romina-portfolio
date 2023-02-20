import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLogosGrandesComponent } from './main-logos-grandes.component';

describe('MainLogosGrandesComponent', () => {
  let component: MainLogosGrandesComponent;
  let fixture: ComponentFixture<MainLogosGrandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLogosGrandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLogosGrandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
