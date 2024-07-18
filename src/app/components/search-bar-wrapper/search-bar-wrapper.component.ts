import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SEARCH_BAR_LOADER } from '@shared/loader.constant';

@Component({
  selector: 'app-search-bar-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `<div #searchHolder></div>`,
  styleUrl: './search-bar-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarWrapperComponent {
  @ViewChild('searchHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {
    const m = await loadRemoteModule(SEARCH_BAR_LOADER);

    this.viewContainer.createComponent(m.SearchComponent);
  }
}
