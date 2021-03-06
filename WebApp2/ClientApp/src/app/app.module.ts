import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { AuthService } from './auth.service';
import { NewsService } from './news.service';
import { AuthInterceptor } from './auth.interceptor';
import { NewsComponent } from './news/news.component';
import { MaterialModule } from './material.module.module';
import { NewsAddComponent } from './news/news-add/news-add.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { AuthGuard } from './login-form/auth.guard';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { MovieService } from './movie.service';

const Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'news', component: NewsComponent, }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NewsComponent,
    HomeComponent,
    NewsAddComponent,
    NewsEditComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    ReactiveFormsModule
  ],
  entryComponents: [
    NewsAddComponent,
    NewsEditComponent,
  ],
  providers: [AuthService, NewsService, MovieService, AuthGuard,
              {
                provide: HTTP_INTERCEPTORS ,
                useClass: AuthInterceptor,
                multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
