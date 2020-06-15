import { AuthService } from './../auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  signupForm = new FormGroup({
    full_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    PhoneNo: new FormControl(null, [Validators.required]),
    BloodType: new FormControl(null, [
      Validators.required,
      Validators.maxLength(3),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
    Repassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
    Admin: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {}

  constructor(private _AuthService: AuthService) {}

  signUp() {
    this._AuthService.register(this.signupForm.value);
  }
}
