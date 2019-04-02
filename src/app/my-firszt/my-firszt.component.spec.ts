import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirsztComponent } from './my-firszt.component';

describe('MyFirsztComponent', () => {
  let component: MyFirsztComponent;
  let fixture: ComponentFixture<MyFirsztComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirsztComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirsztComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
