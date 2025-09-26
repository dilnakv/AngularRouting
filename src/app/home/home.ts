import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit(){
        this.activeRoute.fragment.subscribe((data) => {
            this.jumpToSection(data);
        });
    }

    jumpToSection(section){
      document.getElementById(section).scrollIntoView({behavior:'smooth'})
    }
}
