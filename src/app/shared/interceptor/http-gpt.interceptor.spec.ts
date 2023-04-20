import { TestBed } from '@angular/core/testing';

import { HttpGptInterceptor } from './http-gpt.interceptor';

describe('HttpGptInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpGptInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpGptInterceptor = TestBed.inject(HttpGptInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
