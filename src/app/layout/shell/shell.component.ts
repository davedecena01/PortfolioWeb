import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ScrollSpyService } from '../../shared/ui/scroll-spy/scroll-spy.service';
import { NAV_ITEMS } from '../../core/constants/nav.constants';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements AfterViewInit {
  constructor(private scrollSpy: ScrollSpyService) {}

  ngAfterViewInit(): void {
    this.scrollSpy.init(NAV_ITEMS.map(n => n.id));
  }
}
