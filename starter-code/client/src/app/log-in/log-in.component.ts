import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  logInInfo = {
       username: "",
       password: ""
     }
    
     constructor(private authService:AuthService, public router: Router) {}
    
    
    
     logIn(){
       this.authService.logIn(this.logInInfo)
       .subscribe(() => this.router.navigate(["/home"]));
     }
    
     logOut(){
       this.authService.logOut()
       .subscribe(() => this.router.navigate(["/login"]));
     }

}
