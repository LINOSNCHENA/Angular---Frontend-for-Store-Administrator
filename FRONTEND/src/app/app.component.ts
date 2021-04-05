import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/tokenStorageService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  showresidents = false;
  username!: string;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
  ) { };

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log('isLoggedIn: ', this.isLoggedIn);

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.showresidents = true;
      this.username = user.username;
      // this.router.navigate(['/residents']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.showresidents = false;
  }
}
