import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Facility {
  icon: string;
  title: string;
  description: string;
  highlight?: string;
}

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent {
  facilities: Facility[] = [
    {
      icon: 'fa-solid fa-users',
      title: 'Grand Capacity',
      description: 'Our sprawling lawn accommodates up to 2,000 guests comfortably, perfect for large weddings and corporate events.',
      highlight: '2000 Guests'
    },
    {
      icon: 'fa-solid fa-car',
      title: 'Ample Parking',
      description: 'Dedicated secure parking space for 300+ vehicles with valet service available on request.',
      highlight: '300+ Vehicles'
    },
    {
      icon: 'fa-solid fa-utensils',
      title: 'Catering Services',
      description: 'In-house professional catering with authentic Indian cuisine. Custom menus tailored to your preferences.',
      highlight: 'Multi-Cuisine'
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Premium Lighting',
      description: 'State-of-the-art LED lighting, floral décor, and stage setups that transform the venue into a dream setting.',
      highlight: 'LED Décor'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Security',
      description: '24/7 trained security personnel and CCTV surveillance to ensure complete safety for you and your guests.',
      highlight: '24/7 Guard'
    },
    {
      icon: 'fa-solid fa-bolt',
      title: 'Power Backup',
      description: 'Full generator backup ensures your event never stops — uninterrupted power throughout.',
      highlight: '100% Backup'
    }
  ];
}
