import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstComp } from './my-first-comp';

describe('MyFirstComp', () => {
  let component: MyFirstComp;
  let fixture: ComponentFixture<MyFirstComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFirstComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
