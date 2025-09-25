import { Component, inject } from '@angular/core';
import { ServicesService } from '../../services/services-service';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  servicesService = inject(ServicesService);
    services: {title: string, image: string, description: string}[] = [];

    ngOnInit(){
        this.services = this.servicesService.services;
  }
}
