import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  url: string;
  caption: string;
  category: string;
  span?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  categories = ['All', 'Weddings', 'Receptions', 'Birthday'];
  activeCategory = 'All';

  allItems: GalleryItem[] = [
    { url: 'assets/images/w1.JPG', caption: 'Wedding Celebration', category: 'Weddings', span: 'wide' },
    { url: 'assets/images/w2.JPG', caption: 'Wedding Decor', category: 'Weddings' },
    { url: 'assets/images/b2.JPG', caption: 'Birthday Party', category: 'Birthday' },
    { url: 'assets/images/b3.JPG', caption: 'Birthday Celebration', category: 'Birthday' },
    { url: 'assets/images/b4.JPG', caption: 'Birthday Event', category: 'Birthday' },
    { url: 'assets/images/b5.JPG', caption: 'Event Setup', category: 'Receptions' },
    { url: 'assets/images/b6.JPG', caption: 'Grand Reception', category: 'Receptions' },
    { url: 'assets/images/b7.JPG', caption: 'Evening Event', category: 'Receptions' },
    { url: 'assets/images/b9.JPG', caption: 'Celebration Night', category: 'Receptions' },
    { url: 'assets/images/DSC06888.JPG', caption: 'Special Occasion', category: 'Weddings' },
    { url: 'assets/images/r1.JPG', caption: 'Reception Party', category: 'Receptions' },
  ];

  getItems(): GalleryItem[] {
    if (this.activeCategory === 'All') return this.allItems;
    return this.allItems.filter(i => i.category === this.activeCategory);
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  lightboxOpen = false;
  lightboxImg = '';
  lightboxCaption = '';

  openLightbox(item: GalleryItem) {
    this.lightboxImg = item.url;
    this.lightboxCaption = item.caption;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }
}