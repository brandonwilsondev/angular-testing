import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { UserTypes } from '../types';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  userData: UserTypes;
  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private user: UserService, private router: Router) {}

  ngOnInit(): void {}

  doSubmit() {
    this.userData = {
      firstName: this.userForm.get('firstName').value,
      lastName: this.userForm.get('lastName').value,
      description: this.userForm.get('description').value,
    };
    this.user.submit(this.userData);
    this.router.navigate([`/route-nr-1`]);
  }

  isFieldValid(field: string) {
    return !this.userForm.get(field).valid && this.userForm.get(field).touched;
  }
}
