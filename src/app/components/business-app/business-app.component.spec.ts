import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAppComponent } from './business-app.component';

describe('BusinessAppComponent', () => {
  let component: BusinessAppComponent;
  let fixture: ComponentFixture<BusinessAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
