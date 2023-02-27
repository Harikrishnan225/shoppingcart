import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

enum paswordFieldTypesEnum {
  passwordInputType = 'passwordInputType',
  repeatPasswordInputType = 'repeatPasswordInputType'
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordInputType = 'password';
  repeatPasswordInputType = 'password';
  passwordInputTypes = paswordFieldTypesEnum;

  constructor(
    private fb: FormBuilder,
    private route: Router
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
      rememberMe: [false]
    });
    // , [Validators.required, Validators.email]
  }
  togglePasswordType(variableName: paswordFieldTypesEnum) {
    this[variableName] = this[variableName] === 'text' ? 'password' : 'text';
  }

  login_submit() {
    this.route.navigateByUrl('/product-listing');
  }
}
