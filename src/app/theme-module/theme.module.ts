import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme-list/theme-component';
import { HttpClientModule } from '@angular/common/http';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ThemeComponent, AddThemeComponent, DetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  exports: [ThemeComponent, AddThemeComponent, DetailsComponent]
})
export class ThemeModule { }
