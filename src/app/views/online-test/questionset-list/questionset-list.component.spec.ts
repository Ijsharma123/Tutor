import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsetListComponent } from './questionset-list.component';

describe('QuestionsetListComponent', () => {
  let component: QuestionsetListComponent;
  let fixture: ComponentFixture<QuestionsetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
