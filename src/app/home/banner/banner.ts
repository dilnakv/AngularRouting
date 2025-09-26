import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
  router: Router = inject(Router);

  onSearchClicked(value: string){
    console.log(value);
    this.router.navigate(['/Courses'],{queryParams: {search: value}});
  }
}
