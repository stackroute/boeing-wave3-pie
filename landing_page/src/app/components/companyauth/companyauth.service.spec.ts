import { AuthService } from './../auth/auth.service';
import { TestBed } from '@angular/core/testing';


describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
