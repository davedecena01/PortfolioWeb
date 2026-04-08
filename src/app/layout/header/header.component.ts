import { Component, HostListener } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NAV_ITEMS } from '../../core/constants/nav.constants';
import { NavItem } from '../../core/models/models';
import { ScrollSpyService } from '../../shared/ui/scroll-spy/scroll-spy.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly navItems: NavItem[] = NAV_ITEMS;
  scrolled = false;
  menuOpen = false;

  constructor(protected readonly scrollSpy: ScrollSpyService) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 60;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  onNavClick(event: Event, anchor: string): void {
    event.preventDefault();
    this.menuOpen = false;
    const id = anchor.replace(/^#/, '');
    this.scrollSpy.scrollTo(id);
  }
}
