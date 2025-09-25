import { Component } from '@angular/core';

@Component({
  selector: 'app-testimony',
  standalone: false,
  templateUrl: './testimony.html',
  styleUrl: './testimony.css'
})
export class Testimony {
  testimonials: string[] = ['Avery Holmes', 'Craig Ramirez', 'Landon Stephens', 'Leah Ward']
}
