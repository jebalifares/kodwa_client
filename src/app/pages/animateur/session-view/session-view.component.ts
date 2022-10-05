import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AnimateurService } from 'src/app/services/animateur.service';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { DialogCandidatsComponent } from '../dialog-candidats/dialog-candidats.component';

@Component({
  selector: 'app-session-view',
  templateUrl: './session-view.component.html',
  styleUrls: ['./session-view.component.css']
})
export class SessionViewComponent implements OnInit {
  idSession: number = 0;

  searchInput:any;
  sessions:any=[
    {
      name:'Session of Recruitment',
      description:'this is session test'

    }
  ];
  constructor(
    private matDialog: MatDialog,

    private animateurService:AnimateurService
  ) { }

  ngOnInit(): void {
    this.getSessions();
  }
  getSessions(){
    this.animateurService.sessions().subscribe((res) => {
      this.sessions=res;
      //this.router.navigate(['campaigns', 'details', this.id]);
    });}
    DeleteDialogComponent(session: any) {
      const DialogRef = this.matDialog.open(DialogDeleteComponent
        , {
        panelClass: 'save-dialog',
        position: {
          top: '10%',
          left: '45%',
        },
        data: {
          message: 'Are you sure yout to delete this session?',
        },
      });
      DialogRef.afterClosed().subscribe((response) => {
        if (response == true) {
          this.animateurService
            .deleteSessionById(session.id)
            .subscribe((data) => {
            });
        } else {
          DialogRef.close();
        }
      });
    }
    addCandidatToSession(candidat: any) {
      this.animateurService
        .addCandidatToSession(this.idSession, candidat)
        .subscribe((res) => {
          console.log('add succfully', res);
          this.getSessions();
        });
    }
    createCandidat(candidat: any) {
      this.animateurService.addCandidat(candidat).subscribe((res) => {
        this.addCandidatToSession(res);
      });
    }
    openDialogCandidat(session: any): void {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.panelClass = 'device-dialog';
      dialogConfig.data = {
        id: session.id,
        name: session.name,
        description: session.description,
      };
  
      const dialogRef = this.matDialog.open(DialogCandidatsComponent, dialogConfig);
      this.idSession = session.id!;
  
      dialogRef.afterClosed().subscribe((response) => {
        console.log(response);
        this.createCandidat(response);
      });
}
}
    
  


