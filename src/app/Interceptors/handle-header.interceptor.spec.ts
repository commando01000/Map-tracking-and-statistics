import { TestBed } from '@angular/core/testing';

import { HandleHeaderInterceptor } from './handle-header.interceptor';

describe('HandleHeaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HandleHeaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HandleHeaderInterceptor = TestBed.inject(HandleHeaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
