import { authInterceptorProviders } from './interceptors/authentication.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatVideoModule } from 'mat-video';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewExerciceComponent } from './pages/admin/view-exercice/view-exercice.component';
import { AddExerciceComponent } from './pages/admin/add-exercice/add-exercice.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateExerciceComponent } from './pages/admin/update-exercice/update-exercice.component';
import { ViewExerciceQuestionComponent } from './pages/admin/view-exercice-question/view-exercice-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReferenceComponent } from './pages/admin/reference/reference.component';
import {MatDialogClose, MatDialogModule} from '@angular/material/dialog';
import { ViewReferenceComponent } from './pages/admin/view-reference/view-reference.component';
import { SidebarUserComponent } from './pages/user/sidebar-user/sidebar-user.component';
import {} from '@angular/material/select';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import{MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import {MatStepperModule}  from '@angular/material/stepper';
import { SessionCreateComponent } from './pages/animateur/session-create/session-create.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

import {MatDividerModule} from '@angular/material/divider';
import { SessionViewComponent } from './pages/animateur/session-view/session-view.component';
import { DialogDeleteComponent } from './pages/animateur/dialog-delete/dialog-delete.component';
import { DialogCandidatsComponent } from './pages/animateur/dialog-candidats/dialog-candidats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    SidebarComponent,
    WelcomeComponent,
    ProfileComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewExerciceComponent,
    AddExerciceComponent,
    UpdateExerciceComponent,
    ViewExerciceQuestionComponent,
    AddQuestionComponent,
    ReferenceComponent,
    ViewReferenceComponent,
    SidebarUserComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    DialogCandidatsComponent,
    SessionViewComponent,
    SessionCreateComponent,
    DialogDeleteComponent,
    DialogCandidatsComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatVideoModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDividerModule,
    CKEditorModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),
    MatStepperModule
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
