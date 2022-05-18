import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';
import { ReferenceComponent } from './pages/admin/reference/reference.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
  import { ViewExerciceComponent } from './pages/admin/view-exercice/view-exercice.component';
import { AddExerciceComponent } from './pages/admin/add-exercice/add-exercice.component';
import { UpdateExerciceComponent } from './pages/admin/update-exercice/update-exercice.component';
import { ViewExerciceQuestionComponent } from './pages/admin/view-exercice-question/view-exercice-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sginup',component:SignupComponent},
  {path:'sginin',component:SigninComponent},
  {path:'start/:qid', component:StartComponent},
  {path:'user-dashboard',component:UserDashboardComponent,children:[
    {path:':cid',component:LoadQuizComponent},
    {path:'',component:LoadQuizComponent},
    {path:':0',component:LoadQuizComponent},
    {path:'instructions/:qid', component:InstructionsComponent},
    
  ]},
  {path:'admin-dashboard',component:AdminDashboardComponent,children:[
    {path:'',component:WelcomeComponent},
    {path:'profile',component:ProfileComponent},
    {path:'categories',component:ViewCategoriesComponent},
    {path:'add-category',component:AddCategoryComponent},
    {path:'exercices',component:ViewExerciceComponent},
    {path:'add-exercices',component:AddExerciceComponent},
    {path:'exercice/:qid',component:UpdateExerciceComponent},
    {path:'view-questions/:qid/:title',component:ViewExerciceQuestionComponent},
    {path:'add-question/:qid',component:AddQuestionComponent},
    {path:'add-reference/:cid',component:ReferenceComponent}




  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})



export class AppRoutingModule { }
