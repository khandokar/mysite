import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mysite';
}
