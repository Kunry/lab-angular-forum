import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SignUpComponent } from './sign-up/sign-up.component';

import { AuthService } from '../service/auth.service';

import { routes } from '../router/my-route.routing';
import { LogInComponent } from './log-in/log-in.component';
import { ThreadsComponent } from './threads/threads.component';
import { ServiceThreadsService } from '../service/service-threads.service';
import { ThreadsNewComponent } from './threads-new/threads-new.component';
import { ThreadsIdComponent } from './threads-id/threads-id.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    ThreadsComponent,
    ThreadsNewComponent,
    ThreadsIdComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, ServiceThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
