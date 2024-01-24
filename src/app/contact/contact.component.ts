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

  showfailure = false;
  showsuccess = false;
  sending = false;

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
   
    this.sending = true;
    if (this.form.valid) {
   
    const data = {
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
          this.form.reset();
          this.showsuccess = true;
          console.log(res);
          setTimeout(() => {
            this.showsuccess = false;
          }, 3000);
          this.sending = false;
        },
        error: (e) => {
          console.error(e);
          this.showfailure = true;
          setTimeout(() => {
            this.showfailure = false;
          }, 3000);
          this.sending = false;
         }
      });
    }
    else
    {
      this.form.markAllAsTouched();
      this.sending = false;
    }
  }
}
