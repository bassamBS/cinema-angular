import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isConnected: boolean;
  isAddPage: boolean;

  routerEventsSub: Subscription;
  tokenSub: Subscription;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      ).subscribe((e : any) => {
        if (e.url === '/shows/new') {
          this.isAddPage = true;
        }
        else {
          this.isAddPage = false;
        }
    });

    this.tokenSub = this.authService.token.subscribe(
      (token: string) => {
        this.isConnected = false;
        if (token) {
          this.isConnected = true;
        }
      }
    )
  }

  onClickSignOut() {
    this.authService
      .signOut()
      .then(() => this.router.navigateByUrl('login'))
  }

  ngOnDestroy() {
    this.tokenSub.unsubscribe();
    this.routerEventsSub.unsubscribe();
  }

}
