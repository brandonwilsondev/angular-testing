import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { UserTypes } from '../types';
@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss'],
})
export class ComponentAComponent implements OnInit {
  constructor(private user: UserService) {}
  userData: UserTypes = {
    firstName: '',
    lastName: '',
    description: '',
  };

  ngOnInit(): void {
    this.user.getUser().subscribe((userData) => (this.userData = userData));
  }
}
