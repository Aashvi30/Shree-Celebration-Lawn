import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-top">
        <div class="container footer-grid">

          <div class="footer-brand">
            <div class="brand-logo">
              <span class="logo-emblem">✦</span>
              <div>
                <span class="logo-name">Shree Celebration</span>
                <span class="logo-sub">Premier Event Lawn</span>
              </div>
            </div>
            <p class="brand-desc">Crafting unforgettable moments since 2020. Nagpur's most trusted venue for weddings, receptions, and all special occasions.</p>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a (click)="scrollTo('#hero')">Home</a></li>
              <li><a (click)="scrollTo('#facilities')">Facilities</a></li>
              <li><a (click)="scrollTo('#gallery')">Gallery</a></li>
              <li><a (click)="scrollTo('#pricing')">Pricing</a></li>
              <li><a (click)="scrollTo('#contact')">Contact</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Events We Host</h4>
            <ul>
              <li><a href="#">Weddings & Shaadi</a></li>
              <li><a href="#">Reception Parties</a></li>
              <li><a href="#">Birthday Celebrations</a></li>
              <li><a href="#">Corporate Events</a></li>
              <li><a href="#">Engagement Ceremonies</a></li>
              <li><a href="#">Anniversary Events</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Contact</h4>
            <ul class="contact-list">
              <li><i class="fa-solid fa-location-dot"></i> Nagpur, Maharashtra</li>
              <li><i class="fa-solid fa-phone"></i> +91 98765 43210</li>
              <li><i class="fa-solid fa-envelope"></i> info&#64;shreecelebration.com</li>
            </ul>
          </div>

        </div>
      </div>

      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <span>© 2025 Shree Celebration. All rights reserved.</span>
          <span>Designed with <span style="color:var(--gold)">♥</span> by Aashvi</span>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background: var(--charcoal); }
    .footer-top { padding: 4rem 0 3rem; border-bottom: 1px solid rgba(201,168,76,0.15); }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.6fr 1fr 1.2fr 1fr;
      gap: 2.5rem;
      @media(max-width:900px){ grid-template-columns: 1fr 1fr; }
      @media(max-width:500px){ grid-template-columns: 1fr; }
    }
    .brand-logo { display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem; }
    .logo-emblem { color:var(--gold); font-size:1.4rem; width:40px; height:40px; border:1.5px solid var(--gold); border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    .logo-name { display:block; font-family:var(--ff-display); color:var(--white); font-size:1.1rem; font-weight:700; line-height:1.2; }
    .logo-sub { display:block; font-family:var(--ff-sans); font-size:0.6rem; color:var(--gold); letter-spacing:0.15em; text-transform:uppercase; }
    .brand-desc { font-family:var(--ff-sans); font-size:0.85rem; color:rgba(255,255,255,0.45); line-height:1.7; }
    .footer-col h4 { font-family:var(--ff-sans); font-size:0.7rem; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold); margin-bottom:1.25rem; }
    .footer-col ul { list-style:none; display:flex; flex-direction:column; gap:0.5rem; }
    .footer-col ul li a {
      font-family:var(--ff-sans); font-size:0.85rem; color:rgba(255,255,255,0.5);
      text-decoration:none; cursor:pointer; transition:color 0.2s;
      &:hover { color:var(--gold); }
    }
    .contact-list li { display:flex; align-items:flex-start; gap:0.6rem; font-family:var(--ff-sans); font-size:0.85rem; color:rgba(255,255,255,0.5); }
    .contact-list li i { color:var(--gold); font-size:0.8rem; margin-top:3px; flex-shrink:0; }
    .footer-bottom { padding:1.25rem 0; }
    .footer-bottom-inner { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; font-family:var(--ff-sans); font-size:0.78rem; color:rgba(255,255,255,0.3); }
  `]
})
export class FooterComponent {
  scrollTo(id: string) {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
