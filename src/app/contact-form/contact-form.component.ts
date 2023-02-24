import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactMethod = [
    {
      id: 1,
      name: 'Email',
    },
    {
      id: 2,
      name: 'Phone',
    },
  ];
  onSubmit(data: any) {
    const { firstName, comment } = data.value;
    console.log(data.value);
  }
}
