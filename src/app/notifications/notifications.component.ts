import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  header!: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.headerHidden();
  }

  headerHidden() {
    if(this.router.isActive('/activity', true)) {
      this.header = false;
    } else {
      this.header = true;
    }
  }

}
