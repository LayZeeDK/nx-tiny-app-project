import { async, TestBed } from '@angular/core/testing';
import { SharedStylesModule } from './shared-styles.module';

describe('SharedStylesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedStylesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedStylesModule).toBeDefined();
  });
});
