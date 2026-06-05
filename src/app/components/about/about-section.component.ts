import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section about-section" id="about">
      <div class="container about-grid">

        <div class="about-visual reveal">
          <div class="img-frame">
            <img src="assets/images/w2.JPG" alt="Shree Celebration lawn">
            <div class="img-badge">
              <span class="badge-num"> 5+</span>
              <span class="badge-txt"> &nbsp;&nbsp;Years of Excellence</span>
            </div>
          </div>
          <div class="img-secondary">
            <img src="assets/images/b4.JPG" alt="Event setup">
          </div>
        </div>

        <div class="about-text reveal">
          <span class="section-label">Our Story</span>
          <h2 class="section-title">A Legacy of Joyful Celebrations</h2>
          <div class="divider-gold"><span>❋</span></div>

          <p class="about-body">
            Founded in 2020, <strong>Shree Celebration</strong> has grown to become Nagpur's most trusted event lawn,
            hosting over 200 events across weddings, receptions, corporate gatherings, and festive occasions.
          </p>
          <p class="about-body">
            Our philosophy is simple: every celebration deserves to be extraordinary. From the grandest wedding to the
            most intimate gathering, we bring the same passion, attention to detail, and warmth to every event.
          </p>

          <div class="about-highlights">
            <div class="highlight" *ngFor="let h of highlights">
              <i [class]="h.icon"></i>
              <div>
                <strong>{{ h.title }}</strong>
                <span>{{ h.desc }}</span>
              </div>
            </div>
          </div>

          <div class="event-types">
            <h4>Events We Specialize In</h4>
            <div class="event-tags">
              <span *ngFor="let e of events" class="event-tag">{{ e }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .about-section { background: var(--cream); }
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 4rem;
      align-items: center;
      @media(max-width:900px){ grid-template-columns: 1fr; gap: 2.5rem; }
    }
    .about-visual {
      position: relative;
      @media(max-width:900px){ order:2; }
    }
    .img-frame {
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      border: 3px solid var(--gold-pale);

      img { width:100%; height:380px; object-fit:cover; display:block; }
    }
    .img-badge {
      position: absolute;
      bottom: 1.5rem; left: -1.5rem;
      background: var(--burgundy-dark);
      border: 2px solid var(--gold);
      padding: 0.75rem 1.25rem;
      border-radius: 4px;
      text-align: center;
      @media(max-width:500px){ left:0.5rem; }
    }
    .badge-num { display:block; font-family:var(--ff-display); font-size:2rem; font-weight:700; color:var(--gold); line-height:1; }
    .badge-txt { display:block; font-family:var(--ff-sans); font-size:0.65rem; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.7); margin-top:3px; }
    .img-secondary {
      position: absolute;
      bottom: -1.5rem; right: -1.5rem;
      width: 42%;
      border-radius: 4px;
      overflow: hidden;
      border: 3px solid var(--white);
      box-shadow: var(--shadow-deep);
      @media(max-width:600px){ display:none; }

      img { width:100%; height:160px; object-fit:cover; display:block; }
    }
    .about-text {
      @media(max-width:900px){ order:1; }
    }
    .about-body {
      font-family: var(--ff-sans);
      font-size: 0.95rem;
      color: var(--text-mid);
      line-height: 1.8;
      margin-top: 1rem;

      strong { color: var(--burgundy-dark); }
    }
    .about-highlights {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 2rem 0;
    }
    .highlight {
      display: flex;
      align-items: flex-start;
      gap: 1rem;

      i { color:var(--gold); font-size:1.1rem; margin-top:3px; flex-shrink:0; }

      div { display:flex; flex-direction:column; gap:0.15rem; }

      strong { font-family:var(--ff-sans); font-size:0.9rem; font-weight:600; color:var(--text-dark); }
      span   { font-family:var(--ff-sans); font-size:0.82rem; color:var(--text-light); }
    }
    .event-types h4 {
      font-family: var(--ff-sans);
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--text-light);
      margin-bottom: 0.75rem;
    }
    .event-tags { display:flex; flex-wrap:wrap; gap:0.5rem; }
    .event-tag {
      background: var(--gold-pale);
      color: var(--burgundy);
      font-family: var(--ff-sans);
      font-size: 0.78rem;
      font-weight: 600;
      padding: 0.3rem 0.8rem;
      border-radius: 2px;
      border: 1px solid rgba(201,168,76,0.3);
    }
  `]
})
export class AboutSectionComponent {
  highlights = [
    // { icon: 'fa-solid fa-award', title: 'Award-Winning Service', desc: 'Recognized as Nagpur\'s Best Event Venue 2022 & 2023' },
    { icon: 'fa-solid fa-handshake', title: 'Personal Commitment', desc: 'Dedicated coordinator assigned to every event' },
    { icon: 'fa-solid fa-leaf', title: 'Eco-Friendly Practices', desc: 'Green event solutions and sustainable decorations available' },
  ];

  events = ['Weddings', 'Receptions', 'Birthday Parties', 'Anniversaries', 'Corporate Events', 'Engagements', 'Naming Ceremonies', 'Festive Events'];
}
