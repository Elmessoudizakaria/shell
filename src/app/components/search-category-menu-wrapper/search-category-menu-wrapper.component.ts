import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SEARCH_CATEGORY_LOADER } from '@shared/loader.constant';

@Component({
  selector: 'app-search-category-menu-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `<div #categoryHolder></div>`,
  styleUrl: './search-category-menu-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchCategoryMenuWrapperComponent {
  @ViewChild('categoryHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {
    const m = await loadRemoteModule(SEARCH_CATEGORY_LOADER);

    this.viewContainer.createComponent(m.SearchCategoriesMenuComponent);
  }
}
