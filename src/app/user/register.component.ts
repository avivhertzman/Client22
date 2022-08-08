import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
  })

export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    validUser: any;
    errorMsg: any;

    constructor(private http: HttpClient,
        private formBuilder: FormBuilder,
    ) { }

    cancel(){
        localStorage.setItem('register',"false");
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;

        this.registerUser(this.form.value.email, this.form.value.password, this.form.value.firstName, this.form.value.lastName).subscribe(re => { 
            this.validUser = re; 
            if (this.validUser){
              localStorage.setItem('user',this.form.value);
              this.errorMsg = "";
            } else {
              this.loading = false;
              this.errorMsg = "somthing went wrong";
            }
          });
    }

    registerUser(email, pass, firstName, surName){
        const body = new HttpParams()
        .append('firstName', firstName)
        .append('surName', surName)
        .append('email', email)
        .append('pass', pass);
    
        return this.http.post<any[]>('http://localhost:8000/' + 'api/AmadeusController/RegisterUser', body);
      }
}