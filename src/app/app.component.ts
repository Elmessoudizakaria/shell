import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ProductsWrapperComponent,
  SearchBarWrapperComponent,
} from '@components/index';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsWrapperComponent, SearchBarWrapperComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
}
