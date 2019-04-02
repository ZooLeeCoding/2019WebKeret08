import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    var submittedForm = form.form.value;
    console.log(form.form.value);
    localStorage.setItem("username", submittedForm.username);
    this.router.navigate(["/main", {name: "myname"}]);
  }

}
