import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule
  ],
  exports: []
})
export class UserModule { }
