import { async, TestBed } from '@angular/core/testing';
import { SharedDataAccessModule } from './shared-data-access.module';

describe('SharedDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedDataAccessModule).toBeDefined();
  });
});
