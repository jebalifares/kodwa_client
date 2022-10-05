import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimateurService } from 'src/app/services/animateur.service';

@Component({
  selector: 'app-session-create',
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.css']
})
export class SessionCreateComponent implements OnInit {
  session = this.fb.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
    date: [new Date(), Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private animateurService:AnimateurService
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(): any {
    this.animateurService
      .CreateSession(this.session.value)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['session', 'create']);
      });
  }

}
