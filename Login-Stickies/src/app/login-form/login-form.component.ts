import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  result: any;
  constructor(private builder: FormBuilder, private router: Router, private toastr: ToastrService, private service: UserAuthService) {
    sessionStorage.clear();
  }

  loginForm = this.builder.group({
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)])),
  });

  // Function on clicking the login button
  // checks if the entered details are matching with any of the existing user details
  proceedLogin() {
    if (this.loginForm.valid) {
      this.service.getUserbyEmail(this.loginForm.value.email).subscribe(item => {
        this.result = item;
        if (this.result[0].password === this.loginForm.value.password) {
            // stored the id in the session storage to fetch the user's name in the dashboard
            sessionStorage.setItem('user_id', this.result[0].id);
            // On succesfull Login user is redirected to Dashboard page
            this.router.navigate(['/dashboard']);
        }else{
          this.toastr.error("Please enter Valid details", 'invalid user');
        }});
    } else {
      this.toastr.error("Please enter Valid details", 'invalid user');
    }
  }

}
