import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  

  constructor(private userService: UserService, private router: Router) { }

  
  registerHandler(): void {
    this.userService.register()
    this.router.navigate(["/user/login"])
  }
}
