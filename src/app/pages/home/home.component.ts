import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { FacilitiesComponent } from '../../components/facilities/facilities.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { AboutSectionComponent } from '../../components/about/about-section.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    FacilitiesComponent,
    GalleryComponent,
    PricingComponent,
    AboutSectionComponent,
    ContactComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-facilities></app-facilities>
    <app-gallery></app-gallery>
    <app-pricing></app-pricing>
    <app-about-section></app-about-section>
    <app-contact></app-contact>
  `
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initRevealObserver();
  }

  private initRevealObserver(): void {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
  }
}
