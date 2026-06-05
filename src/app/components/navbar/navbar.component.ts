import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  menuOpen = false;

  navLinks = [
    { label: 'Home', href: '#hero', fragment: true },
    { label: 'Facilities', href: '#facilities', fragment: true },
    { label: 'Gallery', href: '#gallery', fragment: true },
    { label: 'Pricing', href: '#pricing', fragment: true },
    { label: 'About', href: '#about', fragment: true },
    { label: 'Contact', href: '#contact', fragment: true },
  ];

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 60;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(id: string) {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.menuOpen = false;
  }
}
