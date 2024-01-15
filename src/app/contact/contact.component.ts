import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  constructor(private contactservice: ContactService) { }

  get f(){
    return this.form.controls;
  }
  
  submit() {   
   
    const data = {
      id: crypto.randomUUID(),
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phone,
      title: this.form.value.title,
      message: this.form.value.message
    };

    console.log(data);

    this.contactservice.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });

  }
}
