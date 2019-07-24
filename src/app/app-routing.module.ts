import { JobitemComponent } from './jobitem/jobitem.component';
import { JobComponent } from './job/job.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesrouteComponent } from './categoriesroute/categoriesroute.component';
import { CatogiesComponent } from './catogies/catogies.component';
import { PorposalShowComponent } from './porposal-show/porposal-show.component';
import { AddPorposalComponent } from './add-porposal/add-porposal.component';
import { FreeLancerComponent } from './free-lancer/free-lancer.component';
import { HireManagerComponent } from './hire-manager/hire-manager.component';
import { CompanyComponent } from './company/company.component';
import { SearchComponent } from './search/search.component';
import { ProfileDemoComponent } from './profile-demo/profile-demo.component';
import { QuizComponent } from './quiz/quiz.component';
import { TestResultComponent } from './test-result/test-result.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Auth/auth.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { UploadImageComponent } from './admin-category/upload-image/upload-image.component';
import { EditCategoryComponent } from './admin-category/edit-category/edit-category.component';
import { AddJobComponent } from './add-job/add-job.component';
import { OtherSkillsComponent } from './other-skills/other-skills.component';
import { SkillsComponent } from './skills/skills.component';
import { TestComponent } from './test/test.component';
import { QuestionsComponent } from './questions/questions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [{ path: '', component: CatogiesComponent },
    { path: 'Category', component: CatogiesComponent },
    { path: 'job/:id', component: JobComponent },
    { path: 'Porposal/:Jobid', component: PorposalShowComponent },
    { path: 'AddPorposal/:Jobid', component: AddPorposalComponent },
    { path: 'jobitem', component: JobitemComponent },
    { path: 'FreeLancerPage/:UserId', component: FreeLancerComponent },
    { path: 'HireMangerPage/:UserId', component: HireManagerComponent },
    { path: 'company/:UserId', component: CompanyComponent },
    { path: 'search/:Name', component: SearchComponent },
    { path: 'Profile', component: ProfileDemoComponent },
    { path: 'Quiz/:TestId', component: QuizComponent },
    { path: 'TestResult', component: TestResultComponent },
    { path: 'AddJob', component: AddJobComponent },
    { path: 'JobSkills/:Jobid', component: OtherSkillsComponent },
    { path: 'FreeLancerSkills/:FreeLancerID', component: SkillsComponent },
    { path: 'contactUs', component: ContactUsComponent },
    { path: 'AboutUs', component: AboutUsComponent },
    ],
    canActivate: [AuthGuard]
  },
  { path: 'adminPanel', component: AdminPanelComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } ,
  children: [{ path: '', component:AdminCategoryComponent  },
 { path: 'AdminCategory', component: AdminCategoryComponent },
 { path: 'addcategory', component: UploadImageComponent },
 { path: 'caregory/:id', component: EditCategoryComponent },
 {path: 'test', component:TestComponent},
 {path:'Qustions/:TestId',component:QuestionsComponent},
  ]
},
  { path: 'forbidden', component: ForbiddenComponent, canActivate: [AuthGuard] },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  //----------------------------------
  //   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  //   { path: 'adminPanel', component: AdminPanelComponent, canActivate: [AuthGuard] , data: { roles: ['Admin'] }},
  //   { path: 'forbidden', component: ForbiddenComponent, canActivate: [AuthGuard] },
  //   {
  //       path: 'signup', component: UserComponent,
  //       children: [{ path: '', component: SignUpComponent }]
  //   },
  //   {
  //       path: 'login', component: UserComponent,
  //       children: [{ path: '', component: SignInComponent }]
  //   },
  //   { path : '', redirectTo: '/login', pathMatch : 'full'},
  // //----------------------------------------

  //   {path:'category',component:CatogiesComponent},
  //    {path:'job/:id' ,component:JobComponent},
  //    {path:'Porposal/:Jobid' ,component:PorposalShowComponent},
  //    {path:'AddPorposal/:Jobid' ,component:AddPorposalComponent},
  //    {path:'jobitem' ,component:JobitemComponent},
  //    {path:'FreeLancerPage/:UserId' ,component:FreeLancerComponent},
  //    {path:'HireMangerPage/:UserId' ,component:HireManagerComponent},
  //    {path:'company/:UserId' ,component:CompanyComponent},
  //    {path:'search/:Name' ,component:SearchComponent},
  //    {path:'Profile' ,component:ProfileDemoComponent},
  //    {path:'Quiz/:TestId',component:QuizComponent},
  //    {path: 'TestResult', component:TestResultComponent},

  //    //-------------------Ramey--------------------------
  //    {path: 'AdminCategory', component:AdminCategoryComponent},
  //    {path: 'addcategory', component:UploadImageComponent},
  //    { path: "caregory/:id", component: EditCategoryComponent },
  //    { path: "AddJob", component: AddJobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
