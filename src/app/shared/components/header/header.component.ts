import { Component, OnInit} from '@angular/core';
import { light } from 'src/app/styles/theme/theme';
import { ThemeService } from 'src/app/styles/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  lightMode: boolean = true;

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.setSavedTheme();
    this.lightMode = this.themeService.getActiveTheme() === light;
  }

  changeTheme(): void {
    this.themeService.isDarkTheme()
      ? this.themeService.setLightTheme()
      : this.themeService.setDarkTheme();
    this.lightMode = this.themeService.getActiveTheme() === light;
  }
}
