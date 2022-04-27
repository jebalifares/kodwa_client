import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExerciceQuestionComponent } from './view-exercice-question.component';

describe('ViewExerciceQuestionComponent', () => {
  let component: ViewExerciceQuestionComponent;
  let fixture: ComponentFixture<ViewExerciceQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExerciceQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExerciceQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
