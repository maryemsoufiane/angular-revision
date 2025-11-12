import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDetailsComp } from './message-details-comp';

describe('MessageDetailsComp', () => {
  let component: MessageDetailsComp;
  let fixture: ComponentFixture<MessageDetailsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageDetailsComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageDetailsComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
