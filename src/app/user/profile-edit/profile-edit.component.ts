import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  form: FormGroup
  user: IUser
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {
    const user = this.userService.wholeInfo
    this.form = this.fb.group({
      username: [user.username, [Validators.required, Validators.minLength(5)]],
      email: [user.email, [Validators.pattern(/^[A-Za-z0-9\.\-]{6,}@gmail\.(bg|com)$/), Validators.required]],
      tel: [user.tel, []]
    })
  }
  cancelHandler(): void {
    this.form.reset()
  }
  submitHandler(): void {
    this.userService.editUser(this.form.value).subscribe({
      next: (x) => {
        console.log(x);
        this.router.navigate(["user/profile"])
      },
      error(error) {
        console.log(error.message);
      }
    })
  }
}
