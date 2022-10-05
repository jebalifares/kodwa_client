import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-candidats',
  templateUrl: './dialog-candidats.component.html',
  styleUrls: ['./dialog-candidats.component.css']
})
export class DialogCandidatsComponent implements OnInit {
  type = [
    'Evaluateur',
    'Candidat',
    
  ];
  CandidatForm = this.fb.group({
    email: [null, Validators.required],
    name: [null, Validators.required],
    numberPhone: [null, Validators.required],
    role: [null, Validators.required],
    
  });

  constructor(
    public dialogRef: MatDialogRef<DialogCandidatsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
