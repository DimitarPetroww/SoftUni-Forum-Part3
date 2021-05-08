import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ProfileComponent, ProfileEditComponent ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: []
})
export class UserModule { }
