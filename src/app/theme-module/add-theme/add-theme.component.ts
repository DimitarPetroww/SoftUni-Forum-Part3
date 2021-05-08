import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent {

  constructor(private themeService: ThemeService, private router: Router) { }
  submitHandler(fV): void {
    this.themeService.postTheme(fV).subscribe({
      next: (x) => {
        console.log(x);
        this.router.navigate(["/themes"])
      },
      error: (error) => {
        console.log(error.message);
      }
    })
  }

  cancelHandler(form: FormGroup): void {
    form.reset()
  }
}
