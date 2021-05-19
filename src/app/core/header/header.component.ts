import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
 
  get isLogged(): boolean {
    console.log(this.userService.isLogged);
    
    return this.userService.isLogged
  }
  get username(): string {
    return this.userService.username
  }
  
  constructor(private userService: UserService) { }

  logoutHandler(): void {
    this.userService.logout()
  }
}
