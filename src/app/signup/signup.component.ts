import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    var submittedForm = form.form.value;
    console.log(form.form.value);
    localStorage.setItem("username", submittedForm.username);
    this.router.navigate(["/main"]);
  }

}
