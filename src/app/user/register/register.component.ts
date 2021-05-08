import { Component, DoCheck, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ConfirmPasswordValidator } from "../../shared/validators"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  form: FormGroup

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { 
    this.form=this.fb.group({
      username: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.pattern(/^[A-Za-z0-9\.\-]{6,}@gmail\.(bg|com)$/), Validators.required]],
      tel: [""],
      passwords: this.fb.group({
        password: ["", [Validators.required, Validators.minLength(5)]],
        rePass: ["", []]
      }, {validator: ConfirmPasswordValidator("password", "rePass")})
    })
  }

  registerHandler(): void {
    const {username, email, tel, passwords } = this.form.value 
    this.userService.register({username, email, tel, password: passwords.password, rePassword: passwords.rePass}).subscribe({
      next: (x) => {
        console.log(x);
        this.router.navigate(["/user/login"])
      },
      error: (error) => {
        console.log(error.message);
      } 
    })

  }
}
