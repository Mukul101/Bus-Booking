import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  from: string = '';
  to: string = '';
  travelDate: string = '';

  constructor(private router: Router) {}

  onSubmit(form: any): void {
    if (form.valid) {
      this.router.navigate(['/bus-list'], {
        queryParams: {
          from: this.from,
          to: this.to,
          travelDate: this.travelDate
        }
      });
    }
  }
}
