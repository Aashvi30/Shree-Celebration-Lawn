import { Component } from '@angular/core';
import { AboutSectionComponent } from '../../components/about/about-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutSectionComponent],
  template: `
    <div style="padding-top: 80px;">
      <app-about-section></app-about-section>
    </div>
  `
})
export class AboutComponent {}
