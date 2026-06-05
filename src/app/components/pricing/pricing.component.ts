import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingPlan {
  name: string;
  price: string;
  duration: string;
  tag?: string;
  popular?: boolean;
  features: string[];
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  plans: PricingPlan[] = [
    {
      name: 'Silver',
      price: '₹65,000',
      duration: 'per event',
      tag: 'Up to 500 Guests',
      features: [
        'Lawn access (8 hours)',
        'Basic lighting setup',
        'Parking for 80 vehicles',
        'Power backup',
        'Security personnel',
        'Basic restroom facilities',
        'Setup & cleanup included',
      ]
    },
    {
      name: 'Gold',
      price: '₹80,000',
      duration: 'per event',
      tag: 'Up to 1000 Guests',
      popular: true,
      features: [
        'Lawn + indoor hall (12 hours)',
        'Premium LED lighting & décor',
        'Parking for 150 vehicles',
        'Full catering (veg menu)',
        'Sound system & DJ console',
        'Power backup (100%)',
        'Security + CCTV',
        'VIP restroom facilities',
        'Dedicated event coordinator',
      ]
    }
  ];

  scrollTo(id: string) {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
