import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';
import { CONTACT_ITEMS } from '../../core/constants/contact.constants';
import { ContactItem } from '../../core/models/models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly contactItems: ContactItem[] = CONTACT_ITEMS;
}
