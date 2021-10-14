import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Interfaces/User';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup; 

  constructor(private fb : FormBuilder, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      userName: ['', Validators.required], 
      userPassword: [null, Validators.required]
    })
  }

 

  Login()
  {
    console.log("had been clicked")
    // if(this.loginForm.valid){

    console.log("password 1 : " + this.loginForm.value.userPassword);
    console.log( this.loginForm.get("userPassword"));
      console.log("form Valid")
      let newUser: User ={
        UserName: this.loginForm.value.userName,
        Password: this.loginForm.value.userPassword,
        ScannerUserId: -1, 
        UserStatus: null, 
      }
      console.log("in login ", newUser)
      this.userService.ValidateUser(newUser)
      .subscribe({
        next: res =>{
            console.log(res);
            if(res.user){
                console.log("valid user"); 
                sessionStorage.setItem('user', JSON.stringify(res.user)); 
                this.router.navigate(['/dashboard']);
            } else{
              alert(res.errorMessage)
            }
        }, 
        error: error=> {
          console.log(error);
          
          alert("Error logging in")
        }
        });
        
      
    // }else{
    //   console.log("form not valid");
    // }
  }
}
