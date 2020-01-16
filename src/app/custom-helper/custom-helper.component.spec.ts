import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHelperComponent } from './custom-helper.component';

describe('CustomHelperComponent', () => {
  let component: CustomHelperComponent;
  let fixture: ComponentFixture<CustomHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
