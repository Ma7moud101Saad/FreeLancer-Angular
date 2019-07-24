import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatogiesComponent } from './catogies/catogies.component';
import { CategoriesrouteComponent } from './categoriesroute/categoriesroute.component';
import { JobComponent } from './job/job.component';
import { JobitemComponent } from './jobitem/jobitem.component';
import { PorposalShowComponent } from './porposal-show/porposal-show.component';
import { AddPorposalComponent } from './add-porposal/add-porposal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { FreeLancerComponent } from './free-lancer/free-lancer.component';
import { AddJobComponent } from './add-job/add-job.component';
import { HireManagerComponent } from './hire-manager/hire-manager.component';
import { CompanyComponent } from './company/company.component';
import { SearchComponent } from './search/search.component';
import { ProfileDemoComponent } from './profile-demo/profile-demo.component';
import { QuizComponent } from './quiz/quiz.component';
import { TestResultComponent } from './test-result/test-result.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { CategoryFromApiComponent } from './admin-category/category-from-api/category-from-api.component';
import { EditCategoryComponent } from './admin-category/edit-category/edit-category.component';
import { UploadImageComponent } from './admin-category/upload-image/upload-image.component';
import { OtherSkillsComponent } from './other-skills/other-skills.component';
import { SkillsComponent } from './skills/skills.component';
import { TestComponent } from './test/test.component';
import { QuestionsComponent } from './questions/questions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    CatogiesComponent,
    CategoriesrouteComponent,
    JobComponent,
    JobitemComponent,
    PorposalShowComponent,
    AddPorposalComponent,
    HeaderComponent,
    FooterComponent,
    ContentHeaderComponent,
    FreeLancerComponent,
    AddJobComponent,
    HireManagerComponent,
    CompanyComponent,
    SearchComponent,
    ProfileDemoComponent,
    QuizComponent,
    TestResultComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    ForbiddenComponent,
    AdminPanelComponent,
    AdminCategoryComponent,
    CategoryFromApiComponent,
    EditCategoryComponent,
    UploadImageComponent,
    OtherSkillsComponent,
    SkillsComponent,
    TestComponent,
    QuestionsComponent,
    ContactUsComponent,
    AboutUsComponent,





  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,

    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
