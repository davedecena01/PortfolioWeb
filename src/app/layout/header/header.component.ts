import { Component, OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit {
  readonly navItems: NavItem[] = NAV_ITEMS;

  constructor(public scrollSpy: ScrollSpyService) {}

  ngOnInit(): void {
    this.scrollSpy.init(this.navItems.map(n => n.id));
  }

  onNavClick(event: Event, anchor: string): void {
    event.preventDefault();
    const id = anchor.replace('#', '');
    this.scrollSpy.scrollTo(id);
  }
}
