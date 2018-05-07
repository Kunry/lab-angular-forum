import { Routes } from '@angular/router';
import { SignUpComponent } from '../app/sign-up/sign-up.component';
import { LogInComponent } from '../app/log-in/log-in.component';
import { ThreadsComponent } from '../app/threads/threads.component';
import { ThreadsNewComponent } from '../app/threads-new/threads-new.component';
import { ThreadsIdComponent } from '../app/threads-id/threads-id.component';


export const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: ThreadsComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LogInComponent},
  { path: 'threads/new', component: ThreadsNewComponent},
  { path: 'threads/:id', component: ThreadsIdComponent}
]