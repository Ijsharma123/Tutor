import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePaperComponent } from './sample-paper.component';

describe('SamplePaperComponent', () => {
  let component: SamplePaperComponent;
  let fixture: ComponentFixture<SamplePaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
