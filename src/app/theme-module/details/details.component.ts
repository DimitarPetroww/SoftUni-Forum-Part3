import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITheme } from 'src/app/interfaces/theme';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  themeId: string
  theme: ITheme
  constructor(private route: ActivatedRoute, private themeService: ThemeService) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(x=> this.themeId = x.id)

    this.themeService.getTheme(this.themeId).subscribe(x=> {
      console.log(x)
      this.theme = x
    })
    
  }

}
