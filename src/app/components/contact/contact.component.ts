import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  date: string;
  guests: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData: ContactForm = {
    name: '', phone: '', email: '',
    eventType: '', date: '', guests: '', message: ''
  };

  submitted = false;
  loading = false;
  errorMsg = '';

  eventTypes = [
    'Wedding', 'Reception', 'Birthday Party', 'Anniversary',
    'Corporate Event', 'Engagement', 'Other'
  ];

  guestRanges = ['Up to 200', '200–500', '500–1000', '1000–2000', '2000+'];

  contactInfo = [
    { icon: 'fa-solid fa-location-dot', label: 'Address', value: 'Outer Jabalpur Ring Road, Near Kapsee Flyover, Bhandara Road, Kapsi, Maharashtra 440035' },
    { icon: 'fa-solid fa-phone', label: 'Phone', value: '+91 98504 34858 / +91 98502 62228' },
    { icon: 'fa-solid fa-envelope', label: 'Email', value: 'aashvitekade30@gmail.com' },
    { icon: 'fa-solid fa-clock', label: 'Office Hours', value: 'Mon–Sat: 9:00 AM – 8:00 PM\nSun: 10:00 AM – 5:00 PM' },
  ];

  // -------------------------------------------------------
  // EmailJS integration
  // Steps to activate:
  // 1. Go to https://www.emailjs.com and create a free account
  // 2. Add an Email Service (Gmail) and note your SERVICE_ID
  // 3. Create an Email Template and note your TEMPLATE_ID
  // 4. Get your PUBLIC_KEY from Account > API Keys
  // 5. Replace the three placeholders below with your actual values
  // -------------------------------------------------------
  private readonly EMAILJS_SERVICE_ID  = 'service_9w3uq5k';
  private readonly EMAILJS_TEMPLATE_ID = 'template_gedxs99';
  private readonly EMAILJS_PUBLIC_KEY  = 'tTf_L6bX9KthQnltv';

  async onSubmit() {
    this.loading = true;
    this.errorMsg = '';

    const templateParams = {
      from_name:  this.formData.name,
      phone:      this.formData.phone,
      from_email: this.formData.email || 'Not provided',
      event_type: this.formData.eventType,
      event_date: this.formData.date,
      guests:     this.formData.guests || 'Not specified',
      message:    this.formData.message || 'No additional requirements',
      to_email:   'aashvitekade30@gmail.com',
    };

    try {
      // Dynamically load EmailJS SDK
      const emailjs = (window as any).emailjs;
      if (!emailjs) throw new Error('EmailJS not loaded');

      await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams,
        this.EMAILJS_PUBLIC_KEY
      );

      this.loading = false;
      this.submitted = true;
      this.formData = { name:'', phone:'', email:'', eventType:'', date:'', guests:'', message:'' };
    } catch (err) {
      this.loading = false;
      this.errorMsg = 'Failed to send enquiry. Please call us directly at +91 98504 34858.';
      console.error('EmailJS error:', err);
    }
  }
}
