import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { UserTypes } from '../types';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  userData: UserTypes = {
    firstName: '',
    lastName: '',
    description: '',
  };
  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.user.getUser().subscribe((userData) => {
      console.log(userData);
      this.userData = userData;
    });
  }
}
