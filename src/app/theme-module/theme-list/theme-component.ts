import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators"
import { IPost } from '../../interfaces/post';
import { ITheme } from '../../interfaces/theme';
import { PostService } from '../../services/post.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme-component.html',
  styleUrls: ['./theme-component.css']
})
export class ThemeComponent implements OnInit {

  postList: IPost[]
  themeList: ITheme[]

  constructor(private postService: PostService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.loadThemes()
    .pipe<ITheme[]>(
      map(x => {
        return x.sort((a: ITheme, b: ITheme) => b.subscribers.length - a.subscribers.length)
      }))
    .subscribe(themes => this.themeList = themes)

    this.postService.loadPosts().subscribe(x => this.postList = x)
  }
}
