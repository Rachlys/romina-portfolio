import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowNavComponent } from './window-nav.component';

describe('WindowNavComponent', () => {
  let component: WindowNavComponent;
  let fixture: ComponentFixture<WindowNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
