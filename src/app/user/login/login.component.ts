import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  get isLogged(): boolean {
    return this.userService.isLogged
  }
  constructor(private userService: UserService, private router: Router) { }

  loginHandler(fV): void {
    this.userService.login(fV).subscribe({
      next: (x) => {
        this.router.navigate(["/themes"])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
