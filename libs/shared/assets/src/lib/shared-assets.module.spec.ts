import { async, TestBed } from '@angular/core/testing';
import { SharedAssetsModule } from './shared-assets.module';

describe('SharedAssetsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAssetsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAssetsModule).toBeDefined();
  });
});
