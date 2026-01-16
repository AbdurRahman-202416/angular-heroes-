import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
@Component({
  selector: 'app-user-registration',
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, FormlyMaterialModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss',
})
export class UserRegistrationComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'guestName',
      type: 'input',
      templateOptions: {
        label: 'Full Name',
        placeholder: 'Enter your full name',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email Address',
        type: 'email',
        placeholder: 'Example: info@hotel.com',
        required: true,
      },
    },
    {
      key: 'roomType',
      type: 'select',
      templateOptions: {
        label: 'Room Type',
        options: [
          { label: 'Single Room', value: 'single' },
          { label: 'Double Room', value: 'double' },
          { label: 'Luxury Suite', value: 'luxury' },
        ],
        required: true,
      },
    },
    {
      key: 'checkInDate',
      type: 'input',
      templateOptions: {
        label: 'Check-in Date',
        type: 'date',
        required: true,
      },
    },
    {
      key: 'specialRequests',
      type: 'textarea',
      templateOptions: {
        label: 'Special Requests',
        placeholder: 'Any food allergies or extra bed requirements?',
        rows: 3,
      },
    },
  ];

  submit() {
    if (this.form.valid) {
      console.log('Registration Data:', this.model);
      alert('Registration Successful! Check console for data.');
    }
  }
}
