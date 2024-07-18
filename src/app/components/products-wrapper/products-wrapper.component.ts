import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { PRODUCT_LOADER } from '../../shared';

@Component({
  selector: 'app-products-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `<div #productsHolder></div>`,
  styleUrl: './products-wrapper.component.scss',
})
export class ProductsWrapperComponent {
  @ViewChild('productsHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {
    const m = await loadRemoteModule(PRODUCT_LOADER);

    this.viewContainer.createComponent(m.ProductListComponent);
  }
}
