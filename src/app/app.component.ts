import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { SidebarComponent } from './admin/layout/components/sidebar/sidebar.component';
import { HeaderComponent } from './admin/layout/components/header/header.component';
import { FooterComponent } from './admin/layout/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent,
    RouterModule,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ECommerceClient';
}
