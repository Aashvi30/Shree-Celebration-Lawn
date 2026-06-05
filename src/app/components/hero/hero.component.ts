import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  stats = [
    { value: '150+', label: 'Events Hosted' },
    { value: '5+', label: 'Years Experience' },
    { value: '2000', label: 'Guest Capacity' },
    { value: '4.9★', label: 'Customer Rating' },
  ];

  ngOnInit(): void {}

  scrollTo(id: string) {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
