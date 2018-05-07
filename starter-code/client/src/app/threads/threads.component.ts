import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ServiceThreadsService } from '../../service/service-threads.service';

@Component({
  selector: 'app-AuthService',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent {

  threads: Array<Object>;

  constructor(public serviceThreadsService: ServiceThreadsService, public authService: AuthService, public router: Router) {

    this.serviceThreadsService.getThreads()
    .subscribe( threads => this.threads = threads );    
  }
  

  logOut(){
    this.authService.logOut()
    .subscribe(() => this.router.navigate(["/home"]));
  }

}
