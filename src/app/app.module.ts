import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostService } from './services/post.service';
import { ThemeService } from './services/theme.service';
import { UserService } from './services/user.service';
import { ThemeModule } from './theme-module/theme.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ThemeModule,
    HttpClientModule,
    UserModule
  ],
  providers: [ThemeService, PostService, UserService],
  bootstrap: [AppComponent, FooterComponent, HeaderComponent]
})
export class AppModule { 

}
