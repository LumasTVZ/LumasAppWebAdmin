import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private notificationService: NzNotificationService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'subject': new FormControl(null, Validators.required),
      'message': new FormControl(null, Validators.required),
      'username': new FormControl(null, [Validators.minLength(8), Validators.required])
    })
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.notificationService.success('email', 'email sent successfully, please check console!');
      this.contactForm.reset()
    } else {
      Object.values(this.contactForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
