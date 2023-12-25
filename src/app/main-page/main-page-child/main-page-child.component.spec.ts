import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageChildComponent } from './main-page-child.component';

describe('MainPageChildComponent', () => {
  let component: MainPageChildComponent;
  let fixture: ComponentFixture<MainPageChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
