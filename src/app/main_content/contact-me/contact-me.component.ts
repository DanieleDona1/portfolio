import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, CommonModule, TranslateModule, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  isSubmitted = false;
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false,
  };

  mailTest = true;

  post = {
    endPoint: 'https://portfolio.daniele-dona.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  markFormAsTouched(ngForm: NgForm) {
    Object.keys(ngForm.controls).forEach((controlName) => {
      const control = ngForm.controls[controlName];
      control.markAsTouched();
    });
  }

  triggerFeedback() {
    this.isSubmitted = true;
    setTimeout(() => {
      this.isSubmitted = false;
    }, 5000);
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.invalid) {
      this.markFormAsTouched(ngForm);
    }

    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.triggerFeedback();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }
}
