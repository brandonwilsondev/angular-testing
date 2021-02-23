import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { UserTypes } from '../types';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss'],
})
export class ComponentBComponent implements OnInit {
  userData: UserTypes = {
    firstName: '',
    lastName: '',
    description: '',
  };
  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.user.getUser().subscribe((userData) => (this.userData = userData));
  }
}
