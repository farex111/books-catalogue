import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  get isEn(): boolean {
    return this.isLanguage('en');
  }
  get isKa(): boolean {
    return this.isLanguage('ka');
  }
  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn;
  }
  get isInitiated(): boolean {
    return false;
  }

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private auth: AuthService
  ) {}

  toEn() {
    this.translateService.setDefaultLang('en');
  }
  toKa() {
    this.translateService.setDefaultLang('ka');
  }

  private isLanguage(lang: string): boolean {
    const defaultLang = this.translateService.defaultLang;
    const currentLang = this.translateService.currentLang;

    return currentLang ? currentLang === lang : defaultLang === lang;
  }

  goToSignIn() {
    this.router.navigate(['sign-in']);
  }
  goToSignUp() {
    this.router.navigate(['sign-up']);
  }
  signOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['sign-in']);
    });
  }

  ngOnInit() {}
}
