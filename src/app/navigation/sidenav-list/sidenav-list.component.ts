import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  isAuth = false;
  authSubscription: Subscription;

  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }

  onCloseSidenav() {
    this.closeSidenav.emit();
  }

  onLogaut() {
    this.onCloseSidenav()
    this.authService.logout()
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
