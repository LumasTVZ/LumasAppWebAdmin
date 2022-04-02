import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm!: FormGroup;

  submitForm(): void {
    console.log('submit', this.resetForm.value);
  }

  constructor() {}

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      password: new FormControl(null, [Validators.required]),
      resetPassword: new FormControl(null, [Validators.required])
    });
  }

}
