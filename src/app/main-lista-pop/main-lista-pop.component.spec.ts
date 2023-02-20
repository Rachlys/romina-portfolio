import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListaPopComponent } from './main-lista-pop.component';

describe('MainListaPopComponent', () => {
  let component: MainListaPopComponent;
  let fixture: ComponentFixture<MainListaPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainListaPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListaPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
