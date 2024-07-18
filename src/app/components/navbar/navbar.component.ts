import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchCategoryMenuWrapperComponent } from '@components/search-category-menu-wrapper/search-category-menu-wrapper.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchCategoryMenuWrapperComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  selectedProductChannel = new BroadcastChannel('selected-product-channel');
  selectedProducts: any[] = [];
  ngOnInit(): void {
    this.selectedProductChannel.addEventListener('message', (evt) => {
      this.selectedProducts = [...evt.data];
    });
  }
}
