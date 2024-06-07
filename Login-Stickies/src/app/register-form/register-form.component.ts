import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  constructor(private builder: FormBuilder, private router: Router, private service: UserAuthService) { }

  // All the fields in the form are declared here with all required validators
  registerForm = this.builder.group({
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    name: this.builder.control('', Validators.required),
    mobile_no:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(10)])),
    password: this.builder.control('', Validators.compose([Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)])),
    notes : this.builder.control([])
  });

  // this method is used to register the user details to be stored in the database using service file
  proceedRegister() {
    if (this.registerForm.valid) {
      this.service.registerUser(this.registerForm.value).subscribe((result) => {
        console.log("User Registered Successfully");
        alert("User Registered Successfully");
        this.router.navigate(['/login']);
      });
    } else {
      console.log("Please Enter Valid Details");
      alert("Please Enter Valid Details");
    }
  }


}
