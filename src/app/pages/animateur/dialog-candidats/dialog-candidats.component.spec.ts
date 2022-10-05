import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCandidatsComponent } from './dialog-candidats.component';

describe('DialogCandidatsComponent', () => {
  let component: DialogCandidatsComponent;
  let fixture: ComponentFixture<DialogCandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCandidatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
