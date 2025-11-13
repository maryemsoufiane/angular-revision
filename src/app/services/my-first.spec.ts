import { TestBed } from '@angular/core/testing';

import { MyFirst } from './my-first';

describe('MyFirst', () => {
  let service: MyFirst;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirst);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
