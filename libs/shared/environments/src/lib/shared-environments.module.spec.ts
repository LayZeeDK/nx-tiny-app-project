import { async, TestBed } from '@angular/core/testing';
import { SharedEnvironmentsModule } from './shared-environments.module';

describe('SharedEnvironmentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedEnvironmentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedEnvironmentsModule).toBeDefined();
  });
});
