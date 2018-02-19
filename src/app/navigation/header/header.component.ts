import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuth = false;
  authSubscription: Subscription;

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authservice.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }

  onLogaut() {
    this.authservice.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
