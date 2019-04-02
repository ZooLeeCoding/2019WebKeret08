import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;

  constructor(private router: Router, 
    public userService: UserService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    var submittedForm = form.form.value;
    console.log(form.form.value);
    this.userService.login(submittedForm.username, 
      submittedForm.password).subscribe(data => {
        console.log(data);
        localStorage.setItem("username", submittedForm.username);
        this.router.navigate(["/main", 
          {name: submittedForm.username}]);
      }, error => {
        this.error = error.statusText;
        console.log(error.statusText, error.status);
      });
  }

}
