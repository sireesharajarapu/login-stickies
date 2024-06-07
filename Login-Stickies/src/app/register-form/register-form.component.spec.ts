// import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
// import { RegisterFormComponent } from './register-form.component';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { UserAuthService } from '../user-auth.service';
// import { of } from 'rxjs';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterTestingModule } from '@angular/router/testing';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { LoginFormComponent } from '../login-form/login-form.component';


// describe('RegisterFormComponent', () => {
//   let component: RegisterFormComponent;
//   let fixture: ComponentFixture<RegisterFormComponent>;
//   let authService: UserAuthService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [RegisterFormComponent],
//       imports: [
//         ReactiveFormsModule,
//         RouterTestingModule,
//         HttpClientModule,
//         MatFormFieldModule,
//         RouterTestingModule.withRoutes([
//           { path: 'login', component: LoginFormComponent }])
//       ],
//       providers: [FormBuilder, UserAuthService],
//     });
//     fixture = TestBed.createComponent(RegisterFormComponent);
//     component = fixture.componentInstance;
//     authService = TestBed.inject(UserAuthService);
//   });
  

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   // checking if all the form feilds are working fine
//   it('should initialize the registerForm with default values', () => {
//     const form = component.registerForm;
//     expect(form.get('email')).toBeTruthy();
//     expect(form.get('name')).toBeTruthy();
//     expect(form.get('address')).toBeTruthy();
//     expect(form.get('account_no')).toBeTruthy();
//     expect(form.get('mobile_no')).toBeTruthy();
//     expect(form.get('password')).toBeTruthy();
//   });

//   // Test-1 with sample user details if registerUser is working good and saving the details in the db
//   it('should call authService.registerUser when form is valid 1', fakeAsync(() => {
//     const mockUserData = {
//       email: 'test@example.com',
//       name: 'John Doe',
//       address: '123 Main St',
//       account_no: '1234567890',
//       mobile_no: '1234567890',
//       password: 'Abc@1234',
//     };
//     const spyRegisterUser = spyOn(authService, 'registerUser').and.returnValue(of({}));

//     component.registerForm.setValue(mockUserData);
//     component.proceedRegister();
//     tick();

//     expect(spyRegisterUser).toHaveBeenCalledWith(mockUserData);
//   }));

//   // Test-2 with sample user details if registerUser is working good and saving the details in the db
//   it('should call authService.RegisterUser when form is valid 2', fakeAsync(() => {
//     const mockUserData = {
//       email: 'johndoe@example.com',
//       name: 'John Doe',
//       address: '1234 Main St',
//       account_no: '1234567890',
//       mobile_no: '1234567890',
//       password: 'Abc@1234',
//     };
//     const spyRegisterUser = spyOn(authService, 'registerUser').and.returnValue(of({}));

//     component.registerForm.setValue(mockUserData);
//     component.proceedRegister();
//     tick();

//     expect(spyRegisterUser).toHaveBeenCalledWith(mockUserData);
//   }));

//   // Test-3 with sample user details if registerUser is working good and saving the details in the db
//   it('should call authService.RegisterUser when form is valid 3', fakeAsync(() => {
//     const mockUserData = {
//       email: 'johnwick@example.com',
//       name: 'John Wick',
//       address: 'Manhattan',
//       account_no: '6279297',
//       mobile_no: '1234567890',
//       password: 'JohnWick@123',
//     };
//     const spyRegisterUser = spyOn(authService, 'registerUser').and.returnValue(of({}));

//     component.registerForm.setValue(mockUserData);
//     component.proceedRegister();
//     tick();

//     expect(spyRegisterUser).toHaveBeenCalledWith(mockUserData);
//   }));

//   // if the form is invalid then it should not call authService.RegisterUser
//   it('should not call authService.RegisterUser when form is invalid', () => {
//     const spyRegisterUser = spyOn(authService, 'registerUser').and.returnValue(of({}));
//     // Leave the form invalid here, and proceedRegister should not be called.
//     component.proceedRegister();
//     expect(spyRegisterUser).not.toHaveBeenCalled();
//   });
// });
