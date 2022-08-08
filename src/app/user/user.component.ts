import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent{
  loginUser: User;
  validUser: any;
  errorMsg: any;
  loginForm: FormGroup | any;
  title = 'material-login';
  constructor(private http: HttpClient) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
   }

  moveToRegister(){
    localStorage.setItem('register',"true");
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.validateUser(this.loginForm.value.email, this.loginForm.value.password).subscribe(re => { 
        this.validUser = re; 
        if (this.validUser){
          localStorage.setItem('user',this.loginForm.value);
          this.errorMsg = "";
        } else {
          this.errorMsg = "email or password is incorrect";
        }
      });
      
      return;
    }
  }

  validateUser(email, pass){
    const body = new HttpParams()
    .append('email', email)
    .append('pass', pass);

    return this.http.post<any[]>('http://localhost:8000/' + 'api/AmadeusController/ValidateUser', body);
  }
}
